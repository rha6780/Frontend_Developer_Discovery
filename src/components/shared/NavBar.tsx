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
            <Link to="/QnA" className="link">
                <div className="nav-item">
                    QnA
                </div>
            </Link>
            <Link to="/" className="link">
                <div className="nav-item">
                    Result
                </div>
            </Link>
        </div>
    );
}

export default NavBar;