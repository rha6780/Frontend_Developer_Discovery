import { NavBar, Main, Graph } from '../components';
import '../asset/css/base.css';


export default function Home() {
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
