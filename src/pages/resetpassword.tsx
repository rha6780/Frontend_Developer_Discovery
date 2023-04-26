import NavBar from '../components/shared/NavBar';
import { ResetPassword } from '../components/Account/ResetPassword';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <ResetPassword />
            </div>
        </div>
    );
}

export default Home;
