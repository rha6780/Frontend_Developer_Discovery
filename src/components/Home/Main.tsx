import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { videoList } from '@/api/v1/videos/list';

export const Main = () => {
    return (
        <div>
            <header className={styles.main_header}>
                <div className={styles.main_title}>Developer Discovery</div>
                <div className={styles.main_body}>
                    {/* <div><Image src='/happypepe.jpeg' height='200px' width='200px' /></div> */}
                    <a href="http://127.0.0.1:3000/signup" className={styles.start_btn}> 회원가입 </a>
                    <div className={styles.main_list}>
                        <div className={styles.list_item}></div>
                    </div>
                </div>
            </header>
        </div >

    );
}

const video_list = videoList();
console.log(video_list);

