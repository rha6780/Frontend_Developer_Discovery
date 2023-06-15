import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css';
import styles from '../../../styles/Post.module.css';


import { postUpdate } from '@/api/v1/posts/update';
import { postDetail } from '@/api/v1/posts/detail';

import { PostDetailState } from '@/models/Post';

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
                    <input type="text" name="title" placeholder="제목" className={styles.input} defaultValue={post?.title || ""}></input>
                </div>
                {props.content}
                <div className={styles.editor_body}>
                    <MarkDownEditor height={500} value={markdown} onChange={setMarkDown} />
                </div>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 수정 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateEditor;
