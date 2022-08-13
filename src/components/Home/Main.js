import '../../asset/css/base.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Main extends Component {

    render() {
        return (
            <div>
                <header className="Main-header">

                    <h1 className="project-title"> <span className="upper-case">D</span>eveloper <span className="upper-case">D</span>iscovery </h1>

                    <div className="sub-area">
                        <div className="sub-title">프로젝트 취지</div>
                        <div> - 미래에 어떤 일을 할지, 직군 등은 직접 그 일을 하기 전까지 결정하기 어렵다는 문제점이 있습니다.</div>
                        <div> - 간단한 QnA를 통해서 간접적으로 직군별, 어떤 일을 하는지 느끼며 재미를 주기 위해 구성하였습니다.</div>
                    </div>
                    <div className="sub-area">
                        <div className="sub-title">주의</div>
                        <div>환경에 따라서 동일 직군이라도 경험하는 바가 다르기 때문에 해당 결과에 대한 성급한 일반화는 지양해주시기 바랍니다. (재미로 봐주세요)</div>

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
    };
}

export default Main;
