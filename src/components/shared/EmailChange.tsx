import { userChangeEmail } from '@/api/v1/users/change_email';
import styles from '../../../styles/Account.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailChange = () => {

    const changeEmail = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                changed_email: event.target.changed_email.value
            }
            await userChangeEmail(data);
            window.location.assign("/");
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
            <div className={styles.title}>이메일 변경</div>
            <div className={styles.instruction}>
                변경할 이메일을 작성해주세요.
            </div>
            <div className={styles.body}>
                <form method="post" onSubmit={changeEmail}>
                    <div className={styles.signup_row}>
                        <label className={styles.row_label}>email*</label>
                        <input type="text" name="changed_email" placeholder="email@example.com" className={styles.input}></input>
                    </div>
                    <div className={styles.signup_last}>
                        <button type="submit" className={styles.submit_button}> 확인 </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default EmailChange;
