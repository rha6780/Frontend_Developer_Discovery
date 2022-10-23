import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { QuestionState } from '../../models/Question';
import { getQuestions } from '../../api/index';

const Question = (props) => {
    const [questions, setQuestion] = useState<QuestionState[]>();
    const question_id = props.id;


    useEffect(() => {
        const initQuestion = async () => {
            const questions = await getQuestions(question_id);
            setQuestion(questions);
        };

        initQuestion();
    }, [question_id]);

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
