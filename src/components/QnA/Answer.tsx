import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { AnswerState } from '../../models/Answer';
import { getAnswers } from '../../api/index';

const Answer = (props) => {
    const [answers, setAnswer] = useState<AnswerState[]>();
    const question_id = props.id;

    useEffect(() => {
        const initAnswer = async () => {
            const answers = await getAnswers(question_id);
            setAnswer(answers);
        };

        initAnswer();
    }, [question_id]);

    return (
        <div className="answer">
            <div>
                {<div>{
                    answers?.map(answer => (
                        <button key={answer.id} className="question-btn">{answer.content}</button>))
                }</div>}
            </div>
        </div>

    );
}

export default Answer;
