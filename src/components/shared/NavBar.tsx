import styles from '../../../styles/Navbar.module.css'
import React, { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';
import { signOut } from '@/api/v1/accounts/signout';

const NavBar = () => {
    // TODO: 로그인 이후 유저 프로필이 표시되도록
    // const [user, setUser] = useState<UserState>();
    const [isLogin, setisLogin] = useState(false);
    useEffect(() => setisLogin(getCookie('refresh_token') != null), []);

    return (
        <div className={styles.navBar}>
            <a href="/" className={styles.nav_homelink}>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>eveloper</span>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>iscovery</span>
            </a>
            <div className={styles.nav_menu}>
                <a href="http://127.0.0.1:3000" onClick={signOut} className={`${isLogin ? styles.signup_link : styles.disable}`} > 로그 아웃 </a>
                <a href="http://127.0.0.1:3000/signup" className={`${isLogin ? styles.disable : styles.signup_link}`}> 회원가입 </a>
                <a href="http://127.0.0.1:3000/signin" className={`${isLogin ? styles.disable : styles.signup_link}`}> 로그인 </a>
            </div>
        </div>
    );
}

export default NavBar;