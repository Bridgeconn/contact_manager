import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Home.js';
import Signup from './Signup.js';
import Signin from './Signin.js';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
ReactDOM.render((
   <Router history = {browserHistory}>
   <Route path = "/" component = {App}>       
         <Route path = "/Home" component = {Home} /> 
         <Route path = "/Signin" component = {Signup} />
         <Route path = "/Signin" component = {Signin} />
      </Route>
   </Router>), document.getElementById('app'));



   