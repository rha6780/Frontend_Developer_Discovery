import { NavBar, Question, Answer } from '../components';
import '../asset/css/QnA.css';
// import { getQuestions } from '../api/index.js';

// const questionList = () => getQuestions();

const QnA = (props) => {
    const question_id = props.match.params.id

    return (
        <div>
            <NavBar />
            <div className="content">
                <div className="qna-divider">
                    <Question id={question_id} />
                </div>
                <Answer id={question_id} />
            </div>
        </div>
    );
}

export default QnA;
