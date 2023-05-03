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
            setUserData(await userCurrent());
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
                        <span>
                            이메일
                        </span>
                    </div>

                    <div className={styles.function}>
                        <a href="#">이메일 변경</a>
                        <br />
                        <a href="#">비밀번호 변경</a>
                        <br />
                        <a href="#">탈퇴하기</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;