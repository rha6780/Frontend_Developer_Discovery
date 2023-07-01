import styles from '../../../styles/Footer.module.css'
import React, { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';

const Footer = () => {
    const [isLogin, setisLogin] = useState(false);
    useEffect(() => setisLogin(getCookie('refresh_token') != null), []);

    return (
        <div>
            <div className={styles.footer}>
                <a href="/" className={styles.footer_homelink}>
                    <span className={styles.uppercase}>D</span>
                    <span className={styles.downcase}>eveloper</span>
                    <span className={styles.uppercase}>D</span>
                    <span className={styles.downcase}>iscovery</span>
                </a>
                <div className={styles.copyright}>
                    Copyright (C) 2023 rha6780
                </div>

            </div>
        </div>

    );
}

export default Footer;