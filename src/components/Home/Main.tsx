import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { videoList } from '@/api/v1/videos/list';

export const Main = () => {
    return (
        <div>
            <div className={styles.main_title}>Developer Discovery</div>
            <div className={styles.main_body}>
                <div className={styles.main_list}>
                    <div className={styles.list_item}></div>
                </div>
            </div>
        </div >

    );
}

const video_list = videoList();
console.log(video_list);

