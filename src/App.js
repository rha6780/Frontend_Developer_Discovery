import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  const onSubmit = () => {
    alert('submit');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> Developer Discovery ! </div>
        <button onClick={onSubmit}> 시작하기 </button>
      </header>
    </div>
  );
}

export default App;
