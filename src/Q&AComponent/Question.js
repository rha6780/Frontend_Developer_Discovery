import './App.css';

function Question() {

    state = {
        question: "질문 1"
    }

    return (
        <div className="Question">
            <div class="question_text">{this.state.question}</div>
        </div>
    );
}

export default Question;
