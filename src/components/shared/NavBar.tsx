import styles from '../../../styles/Navbar.module.css'
import React, { useEffect, useState, useRef } from 'react';

import { signOut } from '@/api/v1/accounts/signout';
import { UserState } from '@/models/User';
import { getUsername, userCurrent } from '@/api/v1/users/current';

const NavBar = () => {
    const [user_data, setUserData] = useState<UserState>();

    useEffect(() => {
        const initUserData = async () => {
            const user_current = await userCurrent();
            setUserData(user_current);
        };
        initUserData();
    }, []);

    const signOutSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await signOut();
            setUserData(undefined);
            window.location.reload();
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div className={styles.navBar}>
            <a href="/" className={styles.nav_homelink}>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>eveloper</span>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>iscovery</span>
            </a>
            <div className={styles.nav_menu}>
                <a onClick={signOutSubmit} className={`${user_data ? styles.signup_link : styles.disable}`} > 로그 아웃 </a>
                <a href="/profile" className={`${user_data ? styles.signup_link : styles.disable}`} > <div>{user_data?.name}</div> </a>
                <a href="/signup" className={`${user_data ? styles.disable : styles.signup_link}`}> 회원가입 </a>
                <a href="/signin" className={`${user_data ? styles.disable : styles.signup_link}`}> 로그인 </a>
            </div>
        </div>
    );
}

export default NavBar;