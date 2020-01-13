import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './components/Header/routes.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header/header.js';
import Side from './components/Side/side.js';
import Map from './components/Map/map.js';
import Profile from './components/Profile/profile.js';

const HomePage = () => <div>This is a Home Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const loginpage = () => <div>This is a Login Page</div>
const signuppage = () => <div>This is a Signup Page</div>
const addpage = () => <div>add page here</div>
const EditPage = () => <div>This is a Edit Page</div>
const DeletePage = () => <div>This is a Delete Page</div>

const Routes = () => (
  <div class="routes">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Signup</Link></li>
      <li><Link to='/add'>Add</Link></li>
      <li><Link to='/edit'>Edit</Link></li>
      <li><Link to='/delete'>Delete</Link></li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component="{Profile}" />
      <Route path="/login" component={loginpage} />
      <Route path="/signup" component="{signuppage}" />
      <Route path="/add" component="{addpage}" />
      <Route path="/edit" component="{EditPage}" />
      <Route path="/delete" component="{DeletePage}" />
    </Switch>
  </div>
)

const BaseLayout = () => (
  <div className="base">
    <Header />
    <Routes/>
    <Side />
    <Map />
  </div>
)

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)

export default App;
