import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Components and render', ()=>{

    let div;
    beforeAll(()=>{
        div = document.createElement('div');
    });

    it('renders without crashing', () => {
      ReactDOM.render(<App />, div);
    });

    afterAll(() => {
        ReactDOM.unmountComponentAtNode(div);
    });
});
