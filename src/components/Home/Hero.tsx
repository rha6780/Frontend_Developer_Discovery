import styles from '../../../styles/Hero.module.css'

export const Hero = () => {
    return (
        <div className={styles.container}>
            {/* <img src='keyboard.jpg' height='600px' width='100%' /> */}
            {/* className={styles.image_text} */}
            <div className={styles.title}>
                Developer Discovery <br />
                개발과 관련된 정보들을 만나보세요.
            </div>
        </div >
    );
}
