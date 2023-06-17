import styles from '../../../styles/Navbar.module.css'
import React, { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';
import { signOut } from '@/api/v1/accounts/signout';
import { UserState } from '@/models/User';
import { userCurrent } from '@/api/v1/users/current';

const NavBar = () => {
    const [user_data, setUserData] = useState<UserState>();
    useEffect(() => {
        const initUserData = async () => {
            const user_current = await userCurrent();
            setUserData(user_current);
            console.log(!user_data);
        };
        initUserData();
    }, []);
    console.log(user_data);

    return (
        <div className={styles.navBar}>
            <a href="/" className={styles.nav_homelink}>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>eveloper</span>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>iscovery</span>
            </a>
            <div className={styles.nav_menu}>
                <a href="/" onClick={signOut} className={`${user_data ? styles.signup_link : styles.disable}`} > 로그 아웃 </a>
                <a href="/profile" className={`${user_data ? styles.signup_link : styles.disable}`} > <div>{user_data?.name}</div> </a>
                <a href="/signup" className={`${user_data ? styles.disable : styles.signup_link}`}> 회원가입 </a>
                <a href="/signin" className={`${user_data ? styles.disable : styles.signup_link}`}> 로그인 </a>
            </div>
        </div>
    );
}

export default NavBar;