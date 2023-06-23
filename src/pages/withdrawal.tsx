import cookies from 'next-cookies'
import NavBar from '../components/shared/NavBar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/shared/Footer';
import { WithDrawal } from '@/components/Account/Withdrawal';

const Home = () => {

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <WithDrawal />
            <Footer />
        </div>
    );
}

export default Home;
