import NavBar from '../components/shared/NavBar';
import { SignUp } from '../components/Account/SignUp';
import Graph from '../components/Home/Graph';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <SignUp />
            </div>
        </div>
    );
}

export default Home;
