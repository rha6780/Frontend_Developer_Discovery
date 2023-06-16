import styles from '../../../styles/Account.module.css'
import { signIn } from '@/api/v1/accounts/signin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const SignIn = () => {

    const signInSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                email: event.target.email.value,
                password: event.target.password.value,
            }
            await signIn(data);
            toast.success('로그인 성공', {
                position: "top-center",
                autoClose: 1000,
            });
            window.location.assign("/");
        } catch (error) {
            toast.error('이메일과 비밀번호를 다시 확인해주세요', {
                position: "top-center",
                autoClose: 1000,
            });
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
                        <label className={styles.row_label}>이메일</label>
                        <input type="text" name="email" placeholder="email" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호</label>
                        <input type="password" name="password" placeholder="password" className={styles.input}></input>
                        <div className={styles.description}>
                            <a href='/password/email-check'> ✈︎ 비밀번호 재설정 </a>
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
