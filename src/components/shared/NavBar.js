import home_icon from '../../asset/image/home_icon.png';
import '../../asset/css/navBar.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <Link to="/" className="link">
                    <div className="nav-item">
                        <img src={home_icon} id="bar-icon" alt="home" />
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
}

export default NavBar;