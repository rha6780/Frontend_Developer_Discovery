import { NavBar, Main } from '../components';
import '../asset/css/base.css';


function Home() {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <Main />
            </div>
        </div>
    );
}

export default Home;
