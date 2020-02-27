import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './component/StatefullComponent';
import Login from './component/Login';

// ReactDOM.render(<StatefullComponent />, document.getElementById('root'));

ReactDOM.render(<Login />, document.getElementById('root'));

// function HelloWorld() {
//     return <p>Ini Adalah Funciton Component</p>
// }


// const HelloWorld = () => {
//     return <p>Ini Adalah Arrow Function Component</p>
// }

// class StatefullComponent extends React.Component {
//     render() {
//         return <p>Ini Adalah StatefullComponent Function Component</p>
//     }
// }

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
