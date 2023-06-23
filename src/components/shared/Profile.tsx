import styles from '../../../styles/Profile.module.css'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { UserState } from '@/models/User';
import { userCurrent } from '@/api/v1/users/current';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';


const Profile = () => {
    const [user_data, setUserData] = useState<UserState>();
    useEffect(() => {
        const initUserData = async () => {
            const user_current = await userCurrent()
            setUserData(user_current);
            console.log(user_current);
        };
        initUserData();
    }, []);

    return (
        <div className="main">
            <div className={styles.body}>
                <div>
                    <div className={styles.profile_container}>
                        <Image className={styles.profile_img} src='/user_icon.png' height='150px' width='150px' />
                    </div>
                    <div className={styles.info}>
                        {<div>{
                            <div key={user_data?.id}>
                                <div className={styles.name_container}>
                                    <div className={styles.name}>{user_data?.name}</div>
                                    <a href="#"><img className={styles.icon} src="/edit_icon.png"></img></a>
                                </div>
                                <div>✉️ {user_data?.email}</div>
                            </div>
                        }</div>}
                    </div>
                </div>
            </div>
            <div className={styles.function}>
                <a href="/accounts/email_change" className={styles.func_btn}>이메일 변경</a>
                <a href="/accounts/password_change" className={styles.func_btn}>비밀번호 변경</a>
                <a href="/withdrawal" className={styles.func_btn}>탈퇴하기</a>
            </div>
        </div>
    );
}

export default Profile;

