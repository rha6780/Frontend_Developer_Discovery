import styles from '../../../styles/Account.module.css'


const EmailChange = () => {

    const changeEmail = async (event: any) => {
        event.preventDefault();
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
