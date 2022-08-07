import '../../asset/css/base.css';

export default function QnA() {

    this.state = {
        answer: "답변 1",
        question: "질문 1"
    }

    return (
        <div className="QnA">
            <button class="answer_button">{this.state.answer}</button>
            <div class="question_text">{this.state.question}</div>
        </div>
    );
}
