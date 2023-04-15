import styles from '../../../styles/Navbar.module.css'
import React, { useEffect, useState } from 'react';
import { UserState } from '../../models/User';
import { userCurrent } from '../../api/index';

const NavBar = () => {
    const [user, setUser] = useState<UserState>();

    useEffect(() => {
        const initQuestion = async () => {
            const user = await userCurrent();
            setUser(user);
            console.log(user)
        };

        initQuestion();
    }, []);

    return (
        <div className={styles.navBar}>
            <a href="/" className={styles.nav_homelink}>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>eveloper</span>
                <span className={styles.uppercase}>D</span>
                <span className={styles.downcase}>iscovery</span>
            </a>
            <div className={styles.nav_menu}>
                <a href="http://127.0.0.1:3000/signup" className={styles.signup_link}> 회원가입 </a>
                <a href="http://127.0.0.1:3000/signup" className={styles.signup_link}> 로그인 </a>
            </div>
        </div>
    );
}

export default NavBar;