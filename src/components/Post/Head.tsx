import styles from '../../../styles/Post.module.css'

export const Head = (props: any) => {

    return (
        <div className={styles.editor_title}>
            📝 {props.title}
        </div >
    );
}

export default Head;
