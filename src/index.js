import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// function header() {
//     const header = (
//     <div class="header">
//         <h1>This will be our react coffee map app</h1>
//         <p>It is {new Date().toLocaleTimeString()}.</p>
//     </div>);
//     ReactDOM.render(header, document.getElementById('header'));
// }
// function input() {
//     const input = (
//     <div class="input">
//         <h2>Input stuff is here</h2>
//     </div>);
//     ReactDOM.render(input, document.getElementById('input'));
// }
// function list() {
//     const list = (
//     <div class="list">
//         <h2>list is here</h2>
//     </div>);
//     ReactDOM.render(list, document.getElementById('list'));
// }
// function map() {
//     const map = (
//     <div class="map">
//         <h2>google map is here</h2>
//     </div>);
//     ReactDOM.render(map, document.getElementById('map'));
// }
// header();
// input();
// list();
// map();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
