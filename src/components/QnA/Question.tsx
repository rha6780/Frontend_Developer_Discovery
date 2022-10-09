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
    }, []);

    return (
        <div className="question" >
            {<div>{
                questions?.map(question => (
                    <div key={question.id}>{question.content}</div>))
            }</div>}
        </div>

    );

}

export default Question;
