// import { useState } from 'react';
import '../../asset/css/QnA.css';
import { getQuestions } from '../../api/question_api.tsx';
// import { Question } from '../../models/Question';

// interface QuestionProps {
//     id: number
//     content: string
// }

// const [QuestionList] = useState<Question[]>()

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