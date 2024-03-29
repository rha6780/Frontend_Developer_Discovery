import styles from '../../../styles/PostList.module.css'
import pagination_styles from '../../../styles/Pagination.module.css'

import { postList } from '@/api/v1/posts/list';
import { useEffect, useState } from 'react';
import { PostState } from '../../models/Post';

import Pagination from '@/components/shared/Pagination';

export const PostList = (props: any) => {
    const [page, setPage] = useState(props.page);
    const [count, setCount] = useState(1);
    const [post_list, setPostList] = useState<PostState[]>();

    useEffect(() => {
        const initPostList = async () => {
            const page = props.page;
            const list = await postList(page);
            setCount(list.count);
            setPostList(list.results);
        };
        initPostList();
    }, []);

    useEffect(() => {
        const initPostList = async () => {
            const list = await postList(page);
            setPostList(list.results);
        };
        initPostList();
    }, [page]);

    return (
        <div>
            <div className={styles.post_section}>
                <div className={styles.title_section}>
                    <div className={styles.sub_title}>
                        🔥 최신 글
                    </div>
                    <div className={styles.btn_section}>
                        <a href="/post/new" className={styles.start_btn}>📝 작성하기</a>
                    </div>
                </div>
                {<div className={styles.post_list}>{
                    post_list?.map(post => (
                        <div key={post.id} className={styles.post_item}>
                            <a className={styles.post_link} href={"/post/" + post.id}>
                                <div className={styles.left_item}>
                                    <div className={styles.post_title}>{post.title}</div>
                                    <div className={styles.post_create_at}>{new Date(post.created_at).toLocaleString()}</div>
                                    <div className={styles.post_introduction}>{post.content}</div>
                                    {/* <div className={styles.recommended}>{post.content}</div> */}
                                </div>
                                <div className={styles.right_item}>
                                    {/* <img className={styles.post_thumbnail} src={post.thumbnail} height='200px' width='300px' /> */}
                                </div>
                            </a>
                        </div>
                    ))
                }</div>}
                <div className={pagination_styles.pagination}>
                    <Pagination page={page} numPages={Math.ceil(count / 10)} next={setPage} className={pagination_styles.pagination_item}></Pagination>
                </div>
            </div>
        </div >
    );
}

