import logo from './logo.svg';
import './App.css';
import API from '@aws-amplify/api';

function App() {
  // question 리스트에 대한 정보 api 구성 후 출력하는 컴포넌트 제작
  async function getQuestion() {
    const data = await API.get('developer-discovery','/api/questions')
  }

  const onSubmit = () => {
    alert('submit');
  }

  const onKeyup = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
    console.log('keyup')
  }

  let item1 = 'item1';
  let item2 = 'item2';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> Developer Discovery ! </div>

        <input onKeyUp={onKeyup}></input>
        <div class="question"> Question Section</div>
        <button> {item1} </button>
        <button> {item2} </button>
      </header>
    </div>
  );
}

export default App;
