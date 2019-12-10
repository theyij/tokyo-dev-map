import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import SimpleMap from './components/map/google-map.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProfilePages from './components/profile/profile.js'

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/components/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/add'>Add</Link></li>
            <li><Link to='/edit'>Edit</Link></li>
            <li><Link to='/delete'>Delete</Link></li>
          </ul>
        </nav>
    </header>

    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component="{SignupPage}" />
      <Route path="/add" component="{AddPage}" />
      <Route path="/edit" component="{EditPage}" />
      <Route path="/delete" component="{DeletePage}" />
      <Route path="/profile" component="{ProfilePages}" />
    </div>
    <footer>
        React Router v4 Browser Example (c) 2017
    </footer>
  </div>
)

const HomePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const SignupPage = () => <div>This is a Signup Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AddPage = () => <div>This is an Add Page</div>
const EditPage = () => <div>This is a Edit Page</div>
const DeletePage = () => <div>This is a Delete Page</div>


const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
render(<App />, document.getElementById('root'))

function header() {
    const header = (
    <div class="header">
        <h1>Tokyo coffe map - with wifi & plug.</h1>
        <a href="https://github.com/theyij/tokyo-dev-map" rel="noopener
 noreferrer"　target="_blank"><p>github</p></a>
    </div>);
    ReactDOM.render(header, document.getElementById('header'));
}
function input() {
    const input = (
    <div class="input">
        <h2>Input</h2>
        <div>
            <label for="name">Add New Place : </label>
            <input type="text" id="name" name="name" value="Name of coffee shop." required />
        </div>
        <div>
            <label for="address">Address : </label>
            <input type="text" id="address" name="address" value="Address of coffee shop." required />
        </div>
        <div>
            <label for="wifi">Has wifi </label>
            <input type="checkbox" id="wifi" name="wifi" required />
        </div>
        <div>
            <label for="plug">Has plug </label>
            <input type="checkbox" id="plug" name="plug" required />
        </div>
    </div>);
    ReactDOM.render(input, document.getElementById('input'));
}
function list() {
    const list = (
    <div class="list">
        <h2>list is here</h2>
    </div>);
    ReactDOM.render(list, document.getElementById('list'));
}
function map() {
    const map = (
    <div class="map">
        <SimpleMap />

    </div>);
    ReactDOM.render(map, document.getElementById('map'));
}
header();
input();
list();
map();
BaseLayout();

//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default App;
