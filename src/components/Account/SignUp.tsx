import styles from '../../../styles/Account.module.css'
import { signUp } from '@/api/v1/accounts/signup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignUp = () => {

    const signUpSubmit = async (event: any) => {
        event.preventDefault();
        try {
            if (event.target.name.value == '') {
                toast.error('이름을 작성해주세요.', {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
            else {
                if (event.target.password.value != event.target.re_password.value) {
                    toast.error('비밀번호와 비밀번호 확인의 값이 다릅니다.', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
                else {
                    const data = {
                        email: event.target.email.value,
                        password: event.target.password.value,
                        re_password: event.target.re_password.value,
                        name: event.target.name.value,
                    }
                    await signUp(data);
                    toast.success('회원가입 성공', {
                        position: "top-center",
                        autoClose: 1000,
                    });
                    window.location.assign("/");
                }
            }
        } catch (error) {
            toast.error("회원가입 실패 각 값을 채워주세요", {
                position: "top-center",
                autoClose: 1000,
            });
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
                        <label className={styles.row_label}>email*</label>
                        <input type="text" name="email" placeholder="email@example.com" className={styles.input}></input>
                        <div className={styles.description}> 이메일은 비밀번호 찾기 시에 사용됩니다.</div>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호*</label>
                        <input type="password" name="password" placeholder="password" className={styles.input}></input>
                        <div className={styles.description}> 비밀번호는 8자 이상이어야 합니다.</div>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호 재확인*</label>
                        <input type="password" name="re_password" placeholder="re_password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>이름*</label>
                        <input type="text" name="name" placeholder="name" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
//TODO : password 암호화 해서 보내도록
// - 개인정보 수집 동의 및 약관 페이지 개발
