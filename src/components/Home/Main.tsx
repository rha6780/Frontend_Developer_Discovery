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
            <div className={styles.video_section}>
                <div className={styles.sub_title}>
                    Trend Videos
                </div>
                {<div className={styles.video_list}>{
                    video_list?.map(video => (
                        <div key={video.id} className={styles.video_item}>
                            <a className={styles.video_link} href={video.youtube_link}>
                                <img className={styles.video_thumbnail} src={video.thumbnail} height='200px' width='300px' />
                                <br />
                                {video.title}
                            </a>
                            <div className={styles.video_introduction}>{video.introduction}</div>
                        </div>
                    ))
                }</div>}
            </div>
            <div className={styles.main_list}>
                <div className={styles.list_item}></div>
            </div>
            <div className={styles.main_body}>
                <a href="/video/create" className={styles.start_btn}>📝 작성하기</a>
            </div>
        </div >

    );
}

