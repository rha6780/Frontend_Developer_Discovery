import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import Profile from '../components/shared/Profile';
import { ToastContainer } from 'react-toastify';


const Page = () => {

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <Profile />
            <Footer />
        </div>
    );
}

export default Page;