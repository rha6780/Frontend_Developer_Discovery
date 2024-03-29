import styles from '../../../styles/Error.module.css';
import errors from '@/models/error_list.json';

const NotFound = (props: any) => {

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                ⚠️
                <br />
                페이지를 찾을 수 없습니다.
            </div>
            <a href="/">홈으로</a>
        </div>
    );
}

export default NotFound;
