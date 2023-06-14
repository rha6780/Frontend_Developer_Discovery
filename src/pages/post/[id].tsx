import styles from '../../../styles/Account.module.css'
import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import { useRouter } from 'next/router';
// import { resetPassword } from '@/api/v1/posts/';


const Home = () => {
    const router = useRouter();
    const id = router.query.id;

    return (
        <div>
            <NavBar />
            <div className={styles.signup}>
                글
            </div >
            <Footer />
        </div>
    );
}

export default Home;
