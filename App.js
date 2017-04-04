//import react module
import React from 'react';
//import module for routing
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

//App compoment 
class App extends React.Component {
   render() {
      return (
         <div>
                <Link to='/Home'>Home</Link>
                <Link to='/Signup'>Signup</Link>
                <Link to='/Signin'>Signin</Link> 
                {this.props.children}
         </div>
      );
   }
   
}

export default App;
