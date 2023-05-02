import styles from '../../../styles/Account.module.css'
import { emailCheck } from '@/api/v1/accounts/password';
import { useEffect, useState } from 'react';
import { getCookie } from '@/api/cookies';

export const EmailCheck = () => {

    const emailSubmit = async (event: any) => {
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
            <div className={styles.title}>비밀번호 재설정</div>
            <div className={styles.body}>
                <form method="post" onSubmit={emailSubmit}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>이메일</label>
                        <input type="text" name="email" placeholder="email" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

