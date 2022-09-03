import '../../asset/css/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/" className="link">
                <div className="nav-item">
                    {/* <img src={home_icon} id="bar-icon" alt="home" /> */}
                    D:D
                </div>
            </Link>
        </div>
    );
}

export default NavBar;