import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from 'react';
import { FileDrop } from "react-file-drop";
import dynamic from 'next/dynamic';

import styles from '../../../styles/Comment.module.css';
import { commentCreate } from '@/api/v1/comments/create';
import { useRouter } from 'next/router';
import { AxiosRequestHeaders } from 'axios';
import { getAccessToken } from '@/api/cookies';
import { UserImageState } from '@/models/User';
import { updateCommentImage } from '@/api/v1/comments/image';



const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export const Editor = () => {
    const router = useRouter();
    const id = router.query.id || "0";
    const [markdown, setMarkDown] = useState<string | undefined>("# 로그인하고 댓글을 남겨주세요");
    const [uploadImage, setImage] = useState<UserImageState>();
    console.log(window.location.hostname);

    const CommentSubmit = async (event: any) => {
        event.preventDefault();

        try {
            if (markdown === '') {
                toast.error('내용을 작성해주세요.', {
                    position: "top-center",
                    autoClose: 2000,
                });
            } else {
                const data = {
                    content: markdown,
                }
                const res = await commentCreate(data, id);
                console.log(res);
                // TODO: 에러 처리 방법 고려, reload 페이지 단위가 아닌 컴포넌트 단위로 이루어지도록 수정
                if (res['error'] === undefined) {
                    window.location.reload();
                }
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
                const res = await updateCommentImage(id, formdata, headers);
                setImage(res);
                const content = markdown + "\n\n ![" + files[0].name + "](http://localhost:8000" + uploadImage?.image + ")";
                setMarkDown(content);
            }
            else {
                alert("png, jpg, jpeg 파일이 아닙니다.");
            }
        }
    }


    return (
        <div >
            <form method="post" onSubmit={CommentSubmit}>
                <div className={styles.editor_body}>
                    <FileDrop
                        onDrop={ImageUpload}>
                        <MarkDownEditor height={180} value={markdown} onChange={setMarkDown} preview="edit" />
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
