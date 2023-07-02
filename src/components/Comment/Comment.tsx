import ReactMarkdown from "react-markdown";
import styles from '../../../styles/Comment.module.css'

export const Comment = (props: any) => {

    return (
        <div className={styles.comment_item}>
            <div className={styles.comment_info}>
                <div className={styles.comment_author}>{props.author.name}</div>
                <div className={styles.comment_fuction}>{new Date(props.created_at).toLocaleDateString()} | <a href={"/post/edit/" + props.author.id}>수정</a> | <a href={"/post/edit/" + props.author.id}>삭제</a></div></div>
            <div className={styles.comment_content}><ReactMarkdown className={styles.comment_content}>{props.content}</ReactMarkdown></div>
        </div >
    );
}

export default Comment;
