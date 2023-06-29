import styles from '../../../styles/Comment.module.css'

export const Comment = (props: any) => {

    return (
        <div className={styles.comment_item}>
            {props.content}
        </div >
    );
}

export default Comment;
