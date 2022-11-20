import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { AnswerState } from '../../models/Answer';
import { getAnswers, getAnswersList } from '../../api/index';
import { Link } from 'react-router-dom';

const Answer = (props) => {
    const [answers, setAnswer] = useState<AnswerState[]>();
    const [answers_list, setAnswerList] = useState<AnswerState[]>();
    const question_id = props.id;
    const category = props.category;
    const next_url = `/QnA/${parseInt(question_id) + 1}`
    // TODO: url을 통한 이동이 아닌 리스트 api를 통해 rendering되는 데이터만 바꾸도록 수정

    useEffect(() => {
        const initAnswer = async () => {
            const answers = await getAnswers(question_id);
            setAnswer(answers);
        };

        initAnswer();
    }, [question_id]);

    return (
        <div className="answer" key={'answer' + question_id}>
            <div>
                {<div>{
                    answers?.map(answer => (
                        <Link to={next_url} key={answer.id} >
                            <button key={answer.id} className="question-btn">{answer.content}</button>
                        </Link>
                    ))
                }</div>}
            </div>
        </div>);
}

export default Answer;
