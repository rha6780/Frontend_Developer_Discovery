import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState('state')
  const updateAnswers = () => {
    //api 로 질문 선택지를 가져온다.
    setText('coder')
    item1 = '';
    item2 = '';
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
        <button onClick={updateAnswers}> answer load! </button>
        <button> {text} </button>
        <button> {item2} </button>
      </header>
    </div>
  );
}

export default App;
