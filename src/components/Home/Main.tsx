import styles from '../../../styles/Main.module.css'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header className={styles.main_header}>

                <h1 className={styles.project_title}> <span className="upper-case">D</span>eveloper <span className="upper-case">D</span>iscovery </h1>


                <a href="http://127.0.0.1:8000/accounts/login/github" className={styles.start_btn}> github 로그인 </a>

            </header>
        </div >

    );
}

export default Main;
