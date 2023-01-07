import React, { useEffect, useState } from 'react';
import '../../asset/css/QnA.css';
import { AnswerState } from '../../models/Answer';
import { getAnswers } from '../../api/index';

const Answer = (props) => {
    const [answers, setAnswer] = useState<AnswerState[]>();
    let question_id = props.id;
    // TODO: url을 통한 이동이 아닌 리스트 api를 통해 rendering되는 데이터만 바꾸도록 수정

    useEffect(() => { }, [question_id]);

    function nextQuestion() {
        console.log(question_id)
        question_id += 1;
    };

    return (
        <div className="answer" key={'answer' + question_id}>
            <div>
                {<div>{
                    answers?.map(answer => (
                        <button key={answer.id} className="question-btn" onClick={() => nextQuestion()}> {answer.content}</button>
                    ))
                }</div>}
            </div>
        </div >);
}

export default Answer;
