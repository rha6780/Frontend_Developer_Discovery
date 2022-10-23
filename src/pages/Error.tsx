import { NavBar, NotFound } from '../components';
import '../asset/css/base.css';


const Error = () => {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <NotFound />
            </div>
        </div>
    );
}

export default Error;
