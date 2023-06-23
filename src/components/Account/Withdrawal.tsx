import styles from '../../../styles/Account.module.css'
import { emailCheck } from '@/api/v1/accounts/password';
import { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';

export const WithDrawal = () => {

    const withDrawalSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                email: event.target.email.value
            }
            await emailCheck(data);
            window.location.assign("/");
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div className={styles.signup}>
            <div className={styles.title}>회원 탈퇴</div>
            <div className={styles.instruction}>
                정말로 회원 탈퇴를 하시겠습니까?
            </div>
            <div className={styles.with_drawal_body}>
                <form method="post" onSubmit={withDrawalSubmit}>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

