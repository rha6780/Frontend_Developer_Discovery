import styles from '../../../styles/Post.module.css'

export const Head = (props: any) => {

    return (
        <div className={styles.editor_title}>
            📝 {props.title} 작성하기
        </div >
    );
}

export default Head;
