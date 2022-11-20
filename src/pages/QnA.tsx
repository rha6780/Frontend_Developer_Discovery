import { NavBar, Card } from '../components';
import '../asset/css/QnA.css';
// import { getQuestions } from '../api/index.js';

// const questionList = () => getQuestions();

const QnA = (props) => {
    const category = props.match.params.category;
    const question_id = props.match.params.id;

    return (
        <div>
            <NavBar />
            <div className="content">
                <Card category={category} />
            </div>
        </div>
    );
}

export default QnA;
