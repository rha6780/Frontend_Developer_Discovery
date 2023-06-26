import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';
import PasswordChange from '@/components/Account/PasswordChange';
import { ToastContainer } from 'react-toastify';


const Page = () => {

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <PasswordChange />
            <Footer />
        </div>
    );
}

export default Page;