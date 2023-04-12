import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header className={styles.main_header}>
                <div className={styles.main_title}>Developer Discovery</div>
                <div className={styles.main_body}>
                    {/* <div><Image src='/happypepe.jpeg' height='200px' width='200px' /></div> */}
                    <a href="http://127.0.0.1:8000/accounts/login/github" className={styles.start_btn}> GitHub 로그인 </a>
                </div>
            </header>
        </div >

    );
}

export default Main;
