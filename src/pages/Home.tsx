import { NavBar, Main, Graph } from '../components';
import '../asset/css/base.css';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <Main />
                <Graph />
            </div>
        </div>
    );
}

export default Home;
