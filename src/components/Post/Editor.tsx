import { toast } from 'react-toastify';
import styles from '../../../styles/Post.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { postCreate } from '@/api/v1/posts/create';
import { useState } from 'react';
import dynamic from 'next/dynamic';


const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export const Editor = () => {
    const [markdown, setMarkDown] = useState<string | undefined>("# Hello World");
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

    return (
        <div className={styles.editor_section}>
            <form method="post" onSubmit={PostSubmit}>
                <div className={styles.input_row}>
                    <label className={styles.input_label}>제목</label>
                    <input type="text" name="title" placeholder="제목" className={styles.input}></input>
                </div>
                <div className={styles.editor_body}>
                    <MarkDownEditor height={500} value={markdown} onChange={setMarkDown} />
                </div>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 작성 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default Editor;
