import NavBar from '../components/shared/NavBar';
import { SignIn } from '../components/Account/SignIn';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/shared/Footer';

const Home = () => {
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="main">
                <SignIn />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
