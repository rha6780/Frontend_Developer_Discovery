import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { Main } from '../components/Home/Main';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
