import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from 'react';
import dynamic from 'next/dynamic';

import styles from '../../../styles/Comment.module.css';
import { commentCreate } from '@/api/v1/comments/create';
import { useRouter } from 'next/router';



const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export const Editor = () => {
    const router = useRouter();
    const id = router.query.id || "0";
    const [markdown, setMarkDown] = useState<string | undefined>("# 로그인하고 댓글을 남겨주세요");
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
                // window.location.assign("/");
            }
        } catch (error) {
            toast.error('서버가 불안정 합니다. 관리자에게 문의하세요.', {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    return (
        <div >
            <form method="post" onSubmit={CommentSubmit}>
                <div className={styles.editor_body}>
                    <MarkDownEditor height={180} value={markdown} onChange={setMarkDown} preview="edit" />
                </div>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 작성 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default Editor;
