import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Header from './Header/header.js';
import Add from './Add/add.js';
import Map from './Map/map.js';
import Side from './Side/side.js';
import Input from './components/input/input.js';
import SimpleMap from './components/map/google-map.js';
import * as serviceWorker from './serviceWorker';
// import Component from './components/map/autocomplete.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProfilePages from './components/profile/profile.js';

<Header />
<Side />
<Map />

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
