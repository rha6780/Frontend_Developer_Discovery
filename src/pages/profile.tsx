import styles from '../../styles/Profile.module.css'
import Image from "next/image";
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { useEffect, useState } from 'react';
import { UserState } from '@/models/User';
import { userCurrent } from '@/api/v1/users/current';


const Profile = () => {
    const [user_data, setUserData] = useState<UserState>();

    useEffect(() => {
        const initUserData = async () => {
            const user_current = await userCurrent()
            console.log(user_current);
            setUserData(user_current);
            console.log(user_data);
        };
        initUserData();
    }, []);

    return (
        <div>
            <NavBar />
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
                        <a href="#" className={styles.func_btn}>이메일 변경</a>
                        <br />
                        <a href="#" className={styles.func_btn}>비밀번호 변경</a>
                        <br />
                        <a href="#" className={styles.func_btn}>탈퇴하기</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;