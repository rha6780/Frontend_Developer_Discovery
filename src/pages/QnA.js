import { NavBar, Question, Answer } from '../components';
import '../asset/css/QnA.css';

export default function QnA() {

    // this.setState({
    //     answer: "답변 1",
    //     question: "질문 1"
    // })

    return (
        <div>
            <NavBar />
            <Question />
            <Answer />
        </div>
    );
}
