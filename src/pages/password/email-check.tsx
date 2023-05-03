import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import { EmailCheck } from '../../components/Account/Emailcheck';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <EmailCheck />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
