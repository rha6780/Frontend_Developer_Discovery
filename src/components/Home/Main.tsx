import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { videoList } from '@/api/v1/videos/list';
import { useEffect, useState } from 'react';
import { VideoState } from '../../models/Video';

export const Main = () => {
    const [video_list, setVideoList] = useState<VideoState[]>();

    useEffect(() => {
        const initVideoList = async () => {
            const list = await videoList();
            console.log(list.results);
            setVideoList(list.results)
        };
        initVideoList();
    }, []);

    return (
        <div>
            {/* <div className={styles.main_title}>Developer Discovery</div> */}
            {/* <div>
                <Image src='/student.jpg' height='420px' width='640px' />
                <div> 개발과 관련된 정보를 찾아보자. </div>
            </div> */}
            <div className={styles.video_section}>
                <div className={styles.sub_title}>Trend Videos</div>
                {<div className={styles.video_list}>{
                    video_list?.map(video => (
                        <div key={video.id} className={styles.video_item}>
                            <img src={video.thumbnail} height='200px' width='350px' />
                            <br />
                            <a className={styles.video_link} href={video.youtube_link}>{video.title}</a>
                            <div>{video.introduction}</div>
                        </div>
                    ))
                }</div>}
            </div>
            <div className={styles.main_list}>
                <div className={styles.list_item}></div>
            </div>
            <div className={styles.main_body}>
            </div>
        </div >

    );
}

