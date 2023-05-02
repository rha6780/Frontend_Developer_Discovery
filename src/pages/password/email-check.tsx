import NavBar from '../../components/shared/NavBar';
import { EmailCheck } from '../../components/Account/Emailcheck';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <EmailCheck />
            </div>
        </div>
    );
}

export default Home;
