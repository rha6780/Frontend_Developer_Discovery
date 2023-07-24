import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { FileDrop } from 'react-file-drop'
import dynamic from 'next/dynamic';

import { postCreate } from '@/api/v1/posts/create';
import styles from '../../../styles/Post.module.css';
import { updatePostImage } from '@/api/v1/posts/image';
import { getAccessToken } from '@/api/cookies';
import { UserImageState } from '@/models/User';
import { AxiosRequestHeaders } from 'axios';


const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export const Editor = () => {
    const [markdown, setMarkDown] = useState<string | undefined>("# Hello World");
    const [uploadImage, setImage] = useState<UserImageState>();

    const PostSubmit = async (event: any) => {
        event.preventDefault();

        try {
            if (event.target.title.value == '') {
                toast.error('제목을 작성해주세요.', {
                    position: "top-center",
                    autoClose: 2000,
                });
            } else {
                const data = {
                    title: event.target.title.value,
                    content: markdown,
                    // thumbnail: '',
                }
                await postCreate(data);
                window.location.assign("/");
            }
        } catch (error) {
            toast.error('서버가 불안정 합니다. 관리자에게 문의하세요.', {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    const ImageUpload = async (files: FileList | null, event: any) => {
        if (files != null) {
            const formdata = new FormData();
            formdata.append(
                "image",
                files[0],
            )

            const headers: AxiosRequestHeaders = {
                'Content-Type': files[0].type,
                "Authorization": `Bearer ${getAccessToken()}`,
            }

            if (files[0].size >= 5000000) {
                alert("5MB 이상 파일은 업로드가 불가능합니다.");
            }
            else if (files[0].type == 'image/png' || files[0].type == 'image/jpeg' || files[0].type == 'image/jpg') {
                const res = await updatePostImage(formdata, headers);
                const content = markdown + "\n\n ![" + files[0].name + "](http://developerdiscovery.com/media/prod" + res.image + ")";

                setMarkDown(content);
                setImage(res);
            }
            else {
                alert("png, jpg, jpeg 파일이 아닙니다.");
            }
        }
    }

    return (
        <div className={styles.editor_section}>
            <form method="post" onSubmit={PostSubmit}>
                <div className={styles.input_row}>
                    <label className={styles.input_label}>제목</label>
                    <input type="text" name="title" placeholder="제목" className={styles.input}></input>
                </div>
                <div className={styles.editor_body}>
                    <FileDrop
                        onDrop={ImageUpload}>
                        <MarkDownEditor height={500} value={markdown} onChange={setMarkDown} />
                    </FileDrop>
                </div>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 작성 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default Editor;
