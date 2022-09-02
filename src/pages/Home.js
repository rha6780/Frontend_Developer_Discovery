import { NavBar, Main } from '../components';
import '../asset/css/base.css';


export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <Main />
            </div>
        </div>
    );
}
