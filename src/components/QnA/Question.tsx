import '../../asset/css/QnA.css';
import { Component } from 'react';

interface QuestionProps {
    id: number
    content: string
}


const Question = () => {

    return (
        <div className="question" >
            <div>질문 1</div>
        </div>

    );

}

export default Question;