import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Components and render', ()=>{

    let div, tableContainer, columnContainer;
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

    it('Should inclide table container in all cases', () => {
        columnContainer = tableContainer.querySelector(".App__column-container");
        console.log(columnContainer)
        expect(columnContainer).toBeTruthy();
    });

    afterAll(() => {
        ReactDOM.unmountComponentAtNode(div);
    });
});
