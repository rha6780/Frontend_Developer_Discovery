import styles from '../../../styles/Account.module.css'
import { resetPassword } from '@/api/v1/accounts/resetpassword';

export const ResetPassword = () => {

    const resetPasswordSubmit = async (event: any) => {
        event.preventDefault();
        try {
            if (event.target.password.value != event.target.re_password.value) {
                alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
            }
            else {
                const data = {
                    email: event.target.email.value,
                    password: event.target.password.value
                }
                await resetPassword(data);
                window.location.assign("/");
            }
        } catch (error) {
            alert("서버가 불안정 합니다. 관리자에게 문의하세요.");
            console.log(error);
        }
    }

    return (
        <div className={styles.signup}>
            <div className={styles.title}>비밀번호 재설정</div>
            <div className={styles.body}>
                <form method="post" onSubmit={resetPasswordSubmit}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>이메일</label>
                        <input type="text" name="email" placeholder="email" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호</label>
                        <input type="password" name="password" placeholder="password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호 확인</label>
                        <input type="password" name="re_password" placeholder="re_password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

