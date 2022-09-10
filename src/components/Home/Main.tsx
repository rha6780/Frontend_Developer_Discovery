import '../../asset/css/base.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header className="Main-header">

                <h1 className="project-title"> <span className="upper-case">D</span>eveloper <span className="upper-case">D</span>iscovery </h1>

                <div className="sub-area">
                    <div>개발자라면 한번 쯤 생각해볼 주제로 재미로 봐주세요</div>

                </div>
                <div className="sub-area">
                    <div className="sub-title">진행 방식</div>
                    <div> 질문에 따라서 더 가까운 선택지를 클릭하세요!</div>
                </div>
                <Link to="/QnA">
                    <button className="start-btn"> 시작하기 </button>
                </Link>
            </header>
        </div >

    );
}

export default Main;
