import '../../asset/css/base.css';
import { Link } from 'react-router-dom';

const Score = () => {
    return (
        <div>
            <header className="Main-header">

                <h1 className="project-title"> <span className="upper-case">D</span>eveloper <span className="upper-case">D</span>iscovery </h1>
                {/* TODO: Score 관련 백엔드 로직 추가 뒤 화면 구성*/}
                <Link to="/QnA">
                    <button className="start-btn"> 시작하기 </button>
                </Link>
            </header>
        </div >

    );
}

export default Score;
