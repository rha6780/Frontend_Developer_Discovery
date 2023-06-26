import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';
import EmailChange from '@/components/Account/EmailChange';
import { ToastContainer } from 'react-toastify';


const Page = () => {

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <EmailChange />
            <Footer />
        </div>
    );
}

export default Page;