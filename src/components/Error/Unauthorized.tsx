import styles from '../../../styles/Error.module.css';

const Unauthorized = () => {
    return (
        <div className={styles.container}>

            <div className={styles.title}>
                ⚠️
                <br />
                로그인이 필요한 작업입니다.
            </div>
            <a href="/signin">로그인하기</a>
        </div>
    );
}

export default Unauthorized;
