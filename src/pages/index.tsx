import NavBar from '../components/shared/NavBar';
import Main from '../components/Home/Main';
import Graph from '../components/Home/Graph';


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
