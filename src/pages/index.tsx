import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import Seo from '../components/shared/Seo';
import { Main } from '../components/Home/Main';
import { PostList } from '../components/Home/PostList';
import { Hero } from '../components/Home/Hero';


const Home = () => {
    return (
        <div>
            <Seo />
            <NavBar />
            <Hero />
            <div className="main">
                <Main />
                <PostList page="1" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
