import '../../asset/css/QnA.css';
import { getQuestions } from '../../api/question_api.tsx';


const data = getQuestions();


const Question = () => {

    return (
        <div className="question" >
            <div>질문 1</div>
            <div>{ }</div>
        </div>

    );

}

export default Question;