import NavBar from '../components/shared/NavBar';
import { Main } from '../components/Home/Main';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <Main />
            </div>
        </div>
    );
}

export default Home;
