import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Biodata from './App';
import * as serviceWorker from './serviceWorker';



// const Hello = () => {
//     return (
//         <p>Hello</p>
//     )
// }


ReactDOM.render(<Biodata />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('root'));

// ReactDOM.render(<p>Hello World</p>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
