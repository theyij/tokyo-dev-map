import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header/header.js';
import Side from './components/Side/side.js';
import Map from './components/Map/map.js';


const BaseLayout = () => (
  <div className="base">
    <Header />
    <Side />
    <Map />
  </div>
)


const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));


export default App;
