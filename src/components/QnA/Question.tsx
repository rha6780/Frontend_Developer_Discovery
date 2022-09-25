import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { QuestionState } from '../../models/Question';
import { getQuestions } from '../../api/index';

const Question = () => {
    const [questions, setQuestion] = useState<QuestionState[]>();

    useEffect(() => {
        const initQuestion = async () => {
            const questions = await getQuestions();
            setQuestion(questions);
        };

        initQuestion();
        // console.log(question);
    }, []);

    console.log(questions)
    return (
        <div className="question" >
            <div>질문 1</div>
            {/* <div>{questions.map(question => (
                <li>{question.id}</li>
            ))}</div> */}

        </div>

    );

}

export default Question;
