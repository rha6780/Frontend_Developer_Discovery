import styles from '../../../styles/Account.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { signIn } from '@/api/v1/accounts/signin';

export const SignIn = () => {

    const signInSubmit = (event: any) => {
        event.preventDefault();
        try {
            const data = {
                username: event.target.username.value,
                password: event.target.password.value,
            }
            signIn(data);
            alert("로그인에 성공했습니다.!");
            window.location.assign("/");
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div className={styles.signup}>
            <div className={styles.title}>로그인</div>
            <div className={styles.instruction}>
                아직 계정이 없으신가요?
            </div>
            <div className={styles.description}>
                <a href='/signup'> ✈︎ 회원가입 </a>
            </div>
            <div className={styles.body}>
                <form method="post" onSubmit={signInSubmit}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>아이디</label>
                        <input type="text" name="username" placeholder="username" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호</label>
                        <input type="password" name="password" placeholder="password" className={styles.input}></input>
                        <div className={styles.description}>
                            <a> ✈︎ 비밀번호 찾기 </a>
                        </div>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

// TODO: 비밀번호 찾기 페이지 링크
//
