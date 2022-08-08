import logo from '../asset/image/logo.svg';
import '../asset/css/base.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="Main" >
                <header className="Main-header">
                    <img src={logo} className="Main-logo" alt="logo" />
                    <div> Developer Discovery ! </div>

                    <Link to="/QnA">
                        <button> 시작하기 </button>
                    </Link>
                </header>
            </div>

        );
    };
}

export default Main;
