import styles from '../../../styles/Post.module.css'
import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { PostDetailState } from '@/models/Post';
import { postDetail } from '@/api/v1/posts/detail';

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

    return (
        <div>
            <NavBar />
            <div className={styles.view_section}>
                <div className={styles.post_info}>
                    <div className={styles.post_title}>{post?.title}</div>
                    {/* TODO : DateTime 형식으로 변경 */}
                    <div>
                        <div className={styles.post_date}>{post?.created_at}</div>
                        <div className={styles.post_date}>{post?.user}</div>
                    </div>
                </div>
                <div>
                    <ReactMarkdown children={post?.content || content} />
                </div>
            </div >
            <Footer />
        </div>
    );

}

export default Home;
