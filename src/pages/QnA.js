import { NavBar, Question, Answer } from '../components';
import '../asset/css/QnA.css';
import { getQuestions } from '../api/question_api';

// const [questionList] = getQuestions();

export default function QnA() {

    // this.setState({
    //     answer: "답변 1",
    //     question: "질문 1"
    // })

    return (
        <div>
            <NavBar />
            <div className="content">
                <div className="qna-divider">
                    {/* <Question /> */}
                </div>
                <Answer />
            </div>
        </div>
    );
}
