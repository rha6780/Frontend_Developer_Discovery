import styles from '../../../styles/Main.module.css'
import { postList } from '@/api/v1/posts/list';
import { useEffect, useState } from 'react';
import { PostState } from '../../models/Post';

export const PostList = () => {
    const [post_list, setPostList] = useState<PostState[]>();

    useEffect(() => {
        const initPostList = async () => {
            const list = await postList();
            console.log(list.results);
            setPostList(list.results)
        };
        initPostList();
    }, []);

    return (
        <div>
            <div className={styles.video_section}>
                <div className={styles.sub_title}>
                    최신 글
                </div>

                {<div className={styles.video_list}>{
                    post_list?.map(post => (
                        <div key={post.id} className={styles.video_item}>
                            <a className={styles.video_link} href="">
                                <img className={styles.video_thumbnail} src={post.thumbnail} height='200px' width='300px' />
                                <br />
                                {post.title}
                            </a>
                            <div className={styles.video_introduction}>{post.content}</div>
                        </div>
                    ))
                }</div>}
            </div>
            <div className={styles.main_list}>
                <div className={styles.list_item}></div>
            </div>
            <div className={styles.main_body}>
                <a href="/post/create" className={styles.start_btn}>📝 작성하기</a>
            </div>
            <br />
            <br />
            <br />
        </div >
    );
}

