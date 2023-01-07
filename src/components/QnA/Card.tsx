import React, { useEffect, useState } from 'react';
import { Answer, Question } from '..';
import '../../asset/css/QnA.css';
import { QuestionState } from '../../models/Question';
import { getQuestionsList } from '../../api/index';

const Card = (props) => {
    const category = props.category;
    let question_id = 1;
    const [questions_list, setQuestionList] = useState<QuestionState[]>();

    useEffect(() => {
        const initQuestion = async () => {
            const questions_list = await getQuestionsList(category);
            setQuestionList(questions_list);
        };

        initQuestion();
    }, [category]);

    questions_list?.map(answer => (
        console.log(answer)
    ));

    function nextCard() {
        console.log(question_id)
        question_id += 1;
    };

    return (
        <div className="qnaCard">
            {<div>{
                questions_list?.map((item: QuestionState) => (
                    <div key={'divider' + item.id} className="qna-divider">
                        {/* <Question id={item.id} /> */}
                        {/* <Answer id={item.id} /> */}
                        <div className="question" key={'question' + question_id}>
                            {<div>
                                {questions_list?.map(question => (
                                    <div key={question.id}>{question.content}</div>
                                ))}
                            </div>}
                        </div>
                        <div className="answer" key={'answer' + question_id}>
                            <div>
                                {<div>
                                    {questions_list?.map(answer => (
                                        <button key={answer.id} className="question-btn" onClick={() => nextCard()}> {answer.content}</button>
                                    ))}
                                </div>}
                            </div>
                        </div >
                    </div>
                ))
            }</div>}
        </div>
    );
}

export default Card;
