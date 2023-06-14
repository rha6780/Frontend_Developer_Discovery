import styles from '../../../styles/Profile.module.css'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { UserState } from '@/models/User';
import { userCurrent } from '@/api/v1/users/current';


const Profile = () => {
    const [user_data, setUserData] = useState<UserState>();
    const initUserData = async () => {
        const user_current = await userCurrent()
        setUserData(user_current);
        console.log(user_current);
    };
    useEffect(() => {
        initUserData();
    }, []);

    return (
        <div className="main">
            <div className={styles.body}>
                <div className={styles.profile_img}>
                    <Image src='/data_quantity.png' height='200px' width='350px' />
                </div>
                <div className={styles.info}>
                    <span>
                    </span>
                    <br />
                    {<div>{
                        <div key={user_data?.id}>
                            <div>이메일 : {user_data?.email}</div>
                            <div>이름 : {user_data?.name}</div>
                        </div>
                    }</div>}
                </div>

                <div className={styles.function}>
                    <a href="/email_change" className={styles.func_btn}>이메일 변경</a>
                    <br />
                    <a href="#" className={styles.func_btn}>비밀번호 변경</a>
                    <br />
                    <a href="/withdrawal" className={styles.func_btn}>탈퇴하기</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;

