import styles from '../../../styles/Main.module.css'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { videoList } from '@/api/v1/videos/list';

export const SignUp = () => {
    return (
        <div>
            <div className={styles.main_body}>
                <form method="post" action="https://localhost:8000/accounts/signup">
                    <label> 이메일 </label>
                    <input type="text" placeholder="email" id="email"></input>

                    <label> 이름 </label>
                    <input type="text" placeholder="name" id="name"></input>

                    <label> 비밀번호 </label>
                    <input type="password" placeholder="password" id="password"></input>

                    <button type="submit"> submit </button>
                </form>
            </div>
        </div >
    );
}

const video_list = videoList();
console.log(video_list);

const onSignUp = async () => {

}