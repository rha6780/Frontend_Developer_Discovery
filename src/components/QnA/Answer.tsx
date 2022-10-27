import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { AnswerState } from '../../models/Answer';
import { getAnswers } from '../../api/index';
import { Link } from 'react-router-dom';

const Answer = (props) => {
    const [answers, setAnswer] = useState<AnswerState[]>();
    const question_id = props.id;
    const next_url = `/QnA/${parseInt(question_id) + 1}`

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
                        <Link to={next_url} key={answer.id} >
                            <button key={answer.id} className="question-btn">{answer.content}</button>
                        </Link>
                    ))
                }</div>}
            </div>
        </div >

    );
}

export default Answer;
