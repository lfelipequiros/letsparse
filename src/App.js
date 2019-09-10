import React from 'react';
import logo from './logo.svg';
import './App.scss';
import _ from 'lodash';

function parseColumns(columnData){
    return(
        <div>
            <h2>Title</h2>
        </div>
    );
}

function App(props) {
    let parsedData = props.parsedData,
        columnData = parsedData.leaders || {},
        columnsComponent = _.map(columnData, parseColumns);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{parsedData.data}</h1>
      </header>

      <div className="App__table-container">
          {columnsComponent}
      </div>
    </div>
  );
}

export default App;
