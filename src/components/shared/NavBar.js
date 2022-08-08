import home_icon from '../../asset/image/home_icon.png';
import '../../asset/css/navBar.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">
                    <div id="nav-item">
                        <image src={home_icon} />
                        Home
                    </div>
                </Link>
                <Link to="/QnA">
                    <div id="nav-item">
                        <image src={home_icon} />
                        QnA List
                    </div>
                </Link>
                <Link to="/">
                    <div id="nav-item">
                        <image src={home_icon} />
                        Result List
                    </div>
                </Link>
            </div>
        );
    }
}

export default NavBar;