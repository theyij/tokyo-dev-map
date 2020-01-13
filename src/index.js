import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
// import Component from './components/map/autocomplete.js';

ReactDOM.render(<App />, document.getElementById('root'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
