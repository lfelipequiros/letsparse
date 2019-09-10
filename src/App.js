import React from 'react';
import logo from './logo.svg';
import './App.scss';
import _ from 'lodash';

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

function parseColumns(columnData){
    let columnTitle = columnData.title,
        parsedGroups = _.map(columnData.groups, parseGroups);
    return(
        <div key={columnTitle}>
            <h2>{columnTitle}</h2>
            {parsedGroups}
        </div>
    );
}

function parseGroups(groupsData){
    let groupHeader = groupsData.header,
        groupDescription = groupsData.desc,
        parsedLeaders = _.map(groupsData.leaders, parseLeaders);

    return(
        <div key={groupsData.abbrev}>
            <h3 alt={groupDescription}>{groupHeader}</h3>
            <div className="App__leaders-wrapper">
                {parsedLeaders}
            </div>
        </div>
    )
}

function parseLeaders(leadersData){
    let rank = leadersData.rank,
        name = leadersData.name,
        value = leadersData.statValue;

    return (
        <div className="App__leader-row">
            <span>{rank}</span>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    )
}

export default App;
