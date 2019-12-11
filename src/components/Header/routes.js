import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const HomePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const SignupPage = () => <div>This is a Signup Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AddPage = () => <div>This is an Add Page</div>
const EditPage = () => <div>This is a Edit Page</div>
const DeletePage = () => <div>This is a Delete Page</div>

export default function Routes() {
  return(
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/components/profile'>Profile</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/edit'>Edit</Link></li>
        <li><Link to='/delete'>Delete</Link></li>
      </ul>

      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component="{SignupPage}" />
        <Route path="/add" component="{AddPage}" />
        <Route path="/edit" component="{EditPage}" />
        <Route path="/delete" component="{DeletePage}" />
        <Route path="./profile" component="{ProfilePages}" />
      </div>
    </div>

  );
}


