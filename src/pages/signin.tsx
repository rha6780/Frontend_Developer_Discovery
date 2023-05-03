import NavBar from '../components/shared/NavBar';
import { SignIn } from '../components/Account/SignIn';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="main">
                <SignIn />
            </div>
        </div>
    );
}

export default Home;
