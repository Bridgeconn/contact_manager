import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import ContactManager from './ContactManager.js'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


// ReactDOM.render(<App />,document.getElementById('app'));
ReactDOM.render((
   <Router history = {browserHistory}>

   <Route path = "/" component = {App}>
         
         <Route path = "/Home" component = {Home} />
         <Route path = "/About" component = {About} />
         <Route path = "/Contact" component = {Contact} />
         <Route path = "/ContactManager" component = {ContactManager}/>
      </Route>
   </Router>), document.getElementById('app'));



   