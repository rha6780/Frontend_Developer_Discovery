import { useState } from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";

import styles from '../../../styles/Comment.module.css'

import { commentDelete } from "@/api/v1/comments/delete";
import { commentUpdate } from "@/api/v1/comments/update";
import { getUsername } from "@/api/v1/users/current";


const MarkDownEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

export const Comment = (props: any) => {

    const isAuthor = getUsername() === props.author.name;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [markdown, setMarkDown] = useState<string | undefined>(props.content);

    const updateFrom = async (event: any) => {
        event.preventDefault();
        if (isAuthor) {
            setIsEdit(true);
        }
    }
    const updateSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                content: markdown
            }
            await commentUpdate(props.post_id, props.id, data);
            setIsEdit(false);
            window.location.reload();
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    const deleteSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await commentDelete(props.post_id, props.id);
            window.location.reload();
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div>
            <div className={isEdit ? styles.disable : styles.comment_item}>
                <div className={styles.comment_info}>
                    <div className={styles.comment_author}>{props.author.name}</div>
                    <div className={styles.comment_fuction}>
                        {new Date(props.created_at).toLocaleDateString()}<div className={isAuthor ? '' : styles.disable}> | <a onClick={updateFrom}>수정</a> | <a onClick={deleteSubmit}>삭제</a></div>
                    </div>
                </div>
                <div className={styles.comment_content}>
                    <ReactMarkdown className={styles.comment_content}>{props.content}</ReactMarkdown>
                </div>
            </div>
            <div className={isEdit ? styles.comment_item : styles.disable}>
                <div className={styles.editor_body}>
                    <MarkDownEditor height={180} value={markdown} onChange={setMarkDown} preview="edit" />
                </div>
                <div className={styles.button_section}>
                    <button onClick={updateSubmit} className={styles.submit_button}>수정 완료</button>
                </div>
            </div>
        </div>
    );
}

export default Comment;
