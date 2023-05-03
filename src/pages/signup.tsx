import cookies from 'next-cookies'
import NavBar from '../components/shared/NavBar';
import { SignUp } from '../components/Account/SignUp';
import { ToastContainer } from 'react-toastify';

const Home = () => {

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="main">
                <SignUp />
            </div>
        </div>
    );
}

export default Home;
