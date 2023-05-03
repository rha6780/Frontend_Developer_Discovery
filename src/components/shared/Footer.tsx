import styles from '../../../styles/Footer.module.css'
import React, { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';

const Footer = () => {
    const [isLogin, setisLogin] = useState(false);
    useEffect(() => setisLogin(getCookie('refresh_token') != null), []);

    return (
        <div>
            <div className={styles.footer}>
                푸터
            </div>
        </div>

    );
}

export default Footer;