import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { Main } from '../components/Home/Main';
import { PostList } from '../components/Home/PostList';
import { Hero } from '../components/Home/Hero';


const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className="main">
                <Main />
                <PostList />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
