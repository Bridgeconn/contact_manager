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
import Detail from './Detail.js';




//import react router link ,browserHistory,indexRoute 
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render((
   <Router history = {browserHistory}>
   <Route path = "/" component = {App}>       
        <Route path = "/Home" component = {Home}/> 
        <Route path = "/Signup" component = {Signup}/>
        <Route path = "/Signin" component = {Signin}/>
        <Route path = "/Contact" component = {Contact}/>
        <Route path = "/ContactList" component = {ContactList}/>
        <Route path = "/Detail" component = {Detail}/>
 				
      </Route>
   </Router>), document.getElementById('app'));




   