import home_icon from '../../asset/image/home_icon.png';
import '../../asset/css/navBar.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar" class="navBar">
                <Link to="/" class="link">
                    <div class="nav-item">
                        <img src={home_icon} id="bar-icon" alt="home" />
                    </div>
                </Link>
                <Link to="/QnA" class="link">
                    <div class="nav-item">
                        QnA List
                    </div>
                </Link>
                <Link to="/" class="link">
                    <div class="nav-item">
                        Result List
                    </div>
                </Link>
            </div>
        );
    }
}

export default NavBar;