import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Parser from './parser';
import mockData from './mock/mockData.json';

//let appParser = new Parser(),
//    parsedData = appParser.parseData();
let parsedData = mockData;

ReactDOM.render(<App parsedData={parsedData}/>, document.getElementById('root'));

serviceWorker.unregister();
