import styles from '../../../styles/Account.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { signUp } from '@/api/v1/accounts/signup';

export const SignUp = () => {

    const signUpSubmit = (event: any) => {
        event.preventDefault();
        try {
            const data = {
                username: event.target.username.value,
                password: event.target.password.value,
                re_password: event.target.re_password.value,
                name: event.target.name.value,
                email: event.target.email.value,
            }
            signUp(data);
            alert("회원가입에 성공했습니다.!");
            window.location.assign("/");
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div className={styles.signup}>
            <div className={styles.title}>회원 가입</div>
            <div className={styles.instruction}>
                회원 가입 시 이용약관, 개인정보취급방침 및 개인정보3자제공에 동의 하게 됩니다.
            </div>
            <div className={styles.body}>
                <form method="post" onSubmit={signUpSubmit}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>아이디*</label>
                        <input type="text" name="username" placeholder="username" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호*</label>
                        <input type="password" name="password" placeholder="password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호 재확인*</label>
                        <input type="password" name="re_password" placeholder="re_password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>이름*</label>
                        <input type="text" name="name" placeholder="name" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>이메일*</label>
                        <input type="text" name="email" placeholder="email" className={styles.input}></input>
                        <div className={styles.description}> 이메일은 비밀번호 찾기 시에 사용됩니다.</div>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
}
//TODO : password 암호화 해서 보내도록
// - 개인정보 수집 동의 및 약관 페이지 개발
