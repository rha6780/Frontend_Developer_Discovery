import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import styles from '../../../styles/Comment.module.css'
import pagination_styles from '../../../styles/Pagination.module.css'

import Comment from '@/components/Comment/Comment';
import Pagination from '@/components/shared/Pagination';

import { CommentState } from '@/models/Comment';
import { commentList } from '@/api/v1/comments/list';


export const CommentList = (props: any) => {
    const id = props.id
    const [page, setPage] = useState(props.page);
    const [comment_list, setCommentList] = useState<CommentState[]>();
    const [count, setCount] = useState(1);

    useEffect(() => {
        const initCommentList = async () => {
            const list = await commentList(page, id);
            setCommentList(list.results)
            setCount(list.count)
        };
        initCommentList();
    }, [id]);

    useEffect(() => {
        const initCommentList = async () => {
            const list = await commentList(page, id);
            setCommentList(list.results)
        };
        initCommentList();
    }, [page]);


    return (
        <div>
            <div className={styles.comment_label}>댓글({count})</div>
            <div>
                {comment_list?.map(comment => (
                    <Comment key={comment.id} post_id={id} id={comment.id} content={comment.content} author={comment.author} created_at={comment.created_at} />
                ))}
            </div>
            <div className={pagination_styles.pagination}>
                <Pagination page={page} numPages={Math.ceil(count / 10)} next={setPage} className={pagination_styles.pagination_item}></Pagination>
            </div>
        </div>
    );
}

export default CommentList;
