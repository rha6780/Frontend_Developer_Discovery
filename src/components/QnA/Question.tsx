import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../asset/css/QnA.css';
import { QuestionState } from '../../models/Question';
import { getQuestions } from '../../api/index';

const Question = (props) => {
    const [questions, setQuestion] = useState<QuestionState[]>();
    const question_id = props.id;
    const history = useHistory();

    useEffect(() => {
        const initQuestion = async () => {
            const questions = await getQuestions(question_id);
            setQuestion(questions);
            if (questions.length === 0) {
                // TODO: 결과 페이지로 가도록
                history.push("/");
            }
        };

        initQuestion();
    }, [question_id]);

    return (
        <div className="question" key={'question' + question_id}>
            {<div>{
                questions?.map(question => (
                    <div key={question.id}>{question.content}</div>))
            }</div>}
        </div>

    );

}

export default Question;
