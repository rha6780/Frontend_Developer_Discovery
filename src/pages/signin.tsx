import NavBar from '../components/shared/NavBar';
import { SignIn } from '../components/Account/SignIn';
import Graph from '../components/Home/Graph';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <SignIn />
            </div>
        </div>
    );
}

export default Home;
