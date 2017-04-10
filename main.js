//import react 
import React from 'react';
//import react dom 
import ReactDOM from 'react-dom';
//import App component
import App from './App.js';
//import Home component
import Home from './Home.js';
//import Signup.js
import Signup from './Signup.js';
//import Signin compoment
import Signin from './Signin.js';
//import Contact component
import Contact from './Contact.js';
import ContactList from './ContactList.js';

import Maria from './Maria.js';
import Francisco from './Francisco.js';
import  Roland from "./Roland.js";
import  Helen from "./Helen.js";
import  Yoshi from "./Yoshi.js";
import  Giovanni from "./Giovanni.js";



//import react router link ,browserHistory,indexRoute 
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render((
   <Router history = {browserHistory}>
   <Route path = "/" component = {App}>       
        <Route path = "/Home" component = {Home} /> 
        <Route path = "/Signup" component = {Signup} />
        <Route path = "/Signin" component = {Signin} />
        <Route path = "/Contact" component = {Contact} />
        <Route path = "/ContactList" component = {ContactList} />
        <Route path = "/Maria" component = {Maria} />
 				<Route path = "/Francisco" component = {Francisco} />
 				<Route path = "/Roland" component = {Roland} />
 				<Route path = "/Helen" component = {Helen} />
 				<Route path = "/Yoshi" component = {Yoshi} />
 				<Route path = "/Giovanni" component = {Giovanni} />
      </Route>
   </Router>), document.getElementById('app'));




   