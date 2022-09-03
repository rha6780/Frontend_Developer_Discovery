import { NavBar, Question, Answer } from '../components';
import '../asset/css/QnA.css';
// import { getQuestions } from '../api/index.js';

// const questionList = () => getQuestions();

const QnA = () => {

    return (
        <div>
            <NavBar />
            <div className="content">
                <div className="qna-divider">
                    <Question />
                </div>
                <Answer />
            </div>
        </div>
    );
}

export default QnA;
