import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from '../../../styles/Post.module.css'

import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';


import { PostDetailState } from '@/models/Post';
import { postDetail } from '@/api/v1/posts/detail';
import { postDelete } from '@/api/v1/posts/delete';

export async function getServerSideProps({ params: { id } }: { params: { id: string } }) {
    return {
        props: {},
    }
}

const Home = () => {
    const router = useRouter();
    const id = router.query.id || "0";
    const [post, setPostList] = useState<PostDetailState>();

    useEffect(() => {
        const initPostList = async () => {
            const detail = await postDetail(id);
            console.log(detail);
            setPostList(detail)
        };
        initPostList();
    }, []);
    const content = `## hello!`

    const deletePost = async () => {
        const result = await postDelete(id);
        window.location.assign("/");
    };

    return (
        <div>
            <NavBar />
            <div className={styles.view_section}>
                <div className={styles.post_info}>
                    <div className={styles.post_title}>{post?.title}</div>
                    <div>
                        <div className={styles.post_date}>{new Date(post?.created_at!).toLocaleDateString()}</div>
                        <div className={styles.post_date}>{post?.author.name}</div>
                    </div>
                </div>
                <div>{post?.thumbnail}</div>
                <div className={styles.markdown_section}>
                    <ReactMarkdown>{post?.content || content}</ReactMarkdown>
                </div>

                <a href={"/post/edit/" + id} type="submit" className={styles.author_button}>
                    <img src="/edit_icon.png"></img>
                </a>
                <a onClick={deletePost} type="submit" className={styles.author_button}>
                    <img src="/delete_icon.png"></img>
                </a>
            </div >
            {/* <div>TODO : 댓글 관련 컴포넌트</div> */}
            <Footer />
        </div>
    );

}

export default Home;
