import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from '../../../styles/Post.module.css'

import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import CommentList from '@/components/Comment/List';
import Editor from '@/components/Comment/Editor';
import Pagination from '@/components/shared/Pagination';

import { PostDetailState } from '@/models/Post';
import { CommentState } from '@/models/Comment';
import { postDetail } from '@/api/v1/posts/detail';
import { postDelete } from '@/api/v1/posts/delete';
import { commentList } from '@/api/v1/comments/list';


export async function getServerSideProps({ params: { id } }: { params: { id: string } }) {
    return {
        props: {},
    }
}

const Home = () => {
    const router = useRouter();
    const id = router.query.id || "0";
    const [post, setPostList] = useState<PostDetailState>();
    const [comment_list, setCommentList] = useState<CommentState[]>();

    useEffect(() => {
        const initPostList = async () => {
            const detail = await postDetail(id);
            console.log(detail);
            setPostList(detail)
        };
        const initCommentList = async () => {
            const list = await commentList(1, id);
            console.log(list);
            setCommentList(list.results)
        };
        initPostList();
        initCommentList();
    }, [id]);

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
                <div className={styles.author_section}>
                    <a onClick={deletePost} type="submit" className={styles.author_button}>
                        삭제
                    </a>
                    |
                    <a href={"/post/edit/" + id} type="submit" className={styles.author_button}>
                        수정
                    </a>
                </div>
                <div><Editor /></div>
                {/* <div className={styles.comment_label}>댓글({comment_list?.length})</div> */}
                <div><CommentList page={1} id={id}></CommentList></div>
            </div >
            <Footer />
        </div>
    );

}

export default Home;
