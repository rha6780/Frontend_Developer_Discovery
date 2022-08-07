import './App.css';

function Answer() {

    state = {
        answer: "답변 1"
    }

    return (
        <div className="Answer">
            <button class="answer_button">{this.state.answer}</button>
        </div>
    );
}

export default Answer;
