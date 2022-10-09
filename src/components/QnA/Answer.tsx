import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { AnswerState } from '../../models/Answer';
import { getAnswers } from '../../api/index';

const Answer = () => {
    const [answers, setAnswer] = useState<AnswerState[]>();

    useEffect(() => {
        const initAnswer = async () => {
            const answers = await getAnswers();
            setAnswer(answers);
        };

        initAnswer();
    }, []);

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
