import '../../asset/css/QnA.css';
import { getQuestions } from '../../api/question_api.tsx';

// interface QuestionProps {
//     id: number
//     content: string
// }

const questionList = getQuestions();

console.log(questionList)
const Question = () => {

    return (
        <div className="question" >
            <div>질문 1</div>
            {/* <div>{ questionList }</div> */}
        </div>

    );

}

export default Question;