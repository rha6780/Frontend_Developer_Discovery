import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { signUp } from '@/api/v1/accounts/signup';

export const SignUp = () => {

    const signUpSubmit = (event: any) => {
        event.preventDefault();
        try {
            const data = {
                username: event.target.username.value,
                name: event.target.name.value,
                password: event.target.password.value,
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
        <div>
            <div className={styles.main_body}>
                <form method="post" onSubmit={signUpSubmit}>
                    <label> 아이디 </label>
                    <input type="text" name="username" id="username" placeholder="username"></input>

                    <label> 이름 </label>
                    <input type="text" name="name" id="name" placeholder="name"></input>

                    <label> 비밀번호 </label>
                    <input type="password" name="password" id="password" placeholder="password"></input>

                    <button type="submit"> submit </button>
                </form>
            </div>
        </div >
    );
}
//TODO : password 암호화 해서 보내도록
