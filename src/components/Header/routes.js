import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './routes.css';
import Add from '../Add/add.js';

const HomePage = () => <div>This is a Home Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const SignupPage = () => <div>This is a Signup Page</div>
const AddPage = () => <div>add page here</div>
const EditPage = () => <div>This is a Edit Page</div>
const DeletePage = () => <div>This is a Delete Page</div>

export default function Routes() {
  return(
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
        <Route path="/profile" component="{ProfilePages}" />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component="{SignupPage}" />
        <Route path="/add" component="{AddPage}" />
        <Route path="/edit" component="{EditPage}" />
        <Route path="/delete" component="{DeletePage}" />
      </Switch>
    </div>
  );
}


