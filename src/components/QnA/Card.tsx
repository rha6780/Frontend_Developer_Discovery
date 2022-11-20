import React, { useEffect, useState } from 'react';
import { Answer, Question } from '..';
import '../../asset/css/QnA.css';
import { QuestionState } from '../../models/Question';
import { getQuestionsList } from '../../api/index';

const Card = (props) => {
    const category = props.category;
    const question_id = useState(1);
    const [questions_list, setQuestionList] = useState<QuestionState[]>();

    useEffect(() => {
        const initQuestion = async () => {
            const questions_list = await getQuestionsList(category);
            setQuestionList(questions_list);
        };

        initQuestion();
    }, [category]);

    return (
        <div className="qnaCard">
            {<div>{
                questions_list?.map((item: QuestionState) => (
                    <div key={'divider' + item.id} className="qna-divider">
                        <Question id={item.id} />
                        <Answer id={item.id} />
                    </div>
                ))
            }</div>}
        </div>
    );
}

export default Card;
