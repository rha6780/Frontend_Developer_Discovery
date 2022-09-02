import { NavBar, Question, Answer } from '../components';
import '../asset/css/QnA.css';
import { getQuestions } from '../api/question_api.tsx';

const [questionList] = getQuestions();

export default function QnA() {

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
