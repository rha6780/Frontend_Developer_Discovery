import { userChangePassword } from '@/api/v1/users/change_password';
import styles from '../../../styles/Account.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordChange = () => {

    const changeEmail = async (event: any) => {
        event.preventDefault();
        try {
            if (event.target.changed_password.value != event.target.re_password.value) {
                toast.error('비밀번호와 비밀번호 확인의 값이 다릅니다.', {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
            else {
                const data = {
                    changed_password: event.target.changed_password.value
                }
                await userChangePassword(data);
                window.location.assign("/");
            }
        } catch (error) {
            toast.error('서버가 불안정 합니다. 관리자에게 문의하세요.', {
                position: "top-center",
                autoClose: 2000,
            });
            console.log(error);
        }

    }

    return (
        <div className={styles.signup}>
            <div className={styles.title}>비밀번호 변경</div>
            <div className={styles.instruction}>
                변경할 비밀번호를 작성해주세요.
            </div>
            <div className={styles.body}>
                <form method="post" onSubmit={changeEmail}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>password*</label>
                        <input type="password" name="changed_password" placeholder="changed_password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>비밀번호 재확인*</label>
                        <input type="password" name="re_password" placeholder="re_password" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PasswordChange;
