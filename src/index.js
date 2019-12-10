import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import SimpleMap from './components/map/google-map.js';
import Input from './components/input/input.js';
import Component from './components/map/autocomplete.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProfilePages from './components/profile/profile.js';


function header() {
    const header = (<div class="header">
        <h1>Tokyo coffe map - with wifi & plug.</h1>
        <a href="https://github.com/theyij/tokyo-dev-map" rel="noopener
 noreferrer" target="_blank">
            <p>github</p>
        </a>
    </div>);
    ReactDOM.render(header, document.getElementById('header'));
}
function side() {
    const side = (
      <Input/>
    );
    ReactDOM.render(side, document.getElementById('side'));



}

function map() {
    const map = (<div class="map">
        <SimpleMap/>

    </div>);
    ReactDOM.render(map, document.getElementById('map'));
}
header();
side();
map();

//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

