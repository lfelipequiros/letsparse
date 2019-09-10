import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App(props) {
    let parsedData = props.parsedData;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{parsedData.data}</h1>
      </header>

      <div className="App__table-container">

      </div>
    </div>
  );
}

export default App;
