import '../../asset/css/base.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header className="Main-header">

                <h1 className="project-title"> <span className="upper-case">D</span>eveloper <span className="upper-case">D</span>iscovery </h1>

                <div className="sub-area">
                    <div>개발자라면 한번 쯤 생각해볼 주제로 더 마음에 드는 것을 선택해주세요</div>

                </div>
                <div className="sub-area">
                    <div className="sub-title">언어 영역</div>
                </div>
                <Link to="/QnA/1">
                    <button className="start-btn"> 시작하기 </button>
                </Link>
            </header>
        </div >

    );
}

export default Main;
