import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Components and render', ()=>{

    let div, tableContainer;
    beforeAll(()=>{
        div = document.createElement('div');
    });

    it('renders without crashing', () => {
      ReactDOM.render(<App />, div);
    });

    it('Should inclide table container in all cases', () => {
        tableContainer = div.querySelector(".App__table-container");
        expect(tableContainer).toBeTruthy();
    });

    afterAll(() => {
        ReactDOM.unmountComponentAtNode(div);
    });
});
