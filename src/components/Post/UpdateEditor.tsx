import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css';
import styles from '../../../styles/Post.module.css';


import { postUpdate } from '@/api/v1/posts/update';
import { postDetail } from '@/api/v1/posts/detail';

import { PostDetailState } from '@/models/Post';
import { UserImageState } from "@/models/User";
import { updatePostImage } from "@/api/v1/posts/image";
import { FileDrop } from "react-file-drop";
import { getAccessToken } from "@/api/cookies";
import { AxiosRequestHeaders } from "axios";

const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export async function getServerSideProps({ params: { id, content } }: { params: { id: string, content: string } }) {
    return {
        props: {},
        loading: () => <p>...</p>
    }
}

export const UpdateEditor = (props: any) => {
    const router = useRouter();
    const id = router.query.id || props.id;
    const [markdown, setMarkDown] = useState<string | undefined>("hihi");
    const [post, setPost] = useState<PostDetailState>();
    const [uploadImage, setImage] = useState<UserImageState>();

    useEffect(() => {
        const initPostDetail = async () => {
            const detail = await postDetail(id);
            console.log(detail);
            setPost(detail);
            setMarkDown(post?.content || "");
        };
        initPostDetail();
    }, []);

    if (!markdown) {
        setMarkDown(post?.content || "");
    }

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
                await postUpdate(id, data);
                window.location.assign(`/post/${id}`);
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
                    <input type="text" name="title" placeholder="제목" className={styles.input} defaultValue={post?.title || ""}></input>
                </div>
                {props.content}
                <div className={styles.editor_body}>
                    <FileDrop
                        onDrop={ImageUpload}>
                        <MarkDownEditor height={500} value={markdown} onChange={setMarkDown} />
                    </FileDrop>
                </div>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 수정 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateEditor;
