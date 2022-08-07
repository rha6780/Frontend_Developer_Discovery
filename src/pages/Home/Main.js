import logo from '../../asset/image/logo.svg';
import '../../asset/css/base.css';
import { Link } from '@aws-amplify/ui-react';


export default function Main() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={logo} className="Main-logo" alt="logo" />
                <div> Developer Discovery ! </div>

                {/* <Link to="/QnA"> TODO: Route 설정하기*/}
                <button> 시작하기 </button>
                {/* </Link> */}
            </header>
        </div>

    );
}
