import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { Main } from '../components/Home/Main';
import { Hero } from '../components/Home/Hero';


const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className="main">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
