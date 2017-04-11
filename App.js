//import react module
import React from 'react';
import {Col} from 'react-bootstrap';


//import module for routing
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


//App compoment 
class App extends React.Component {
   render() {
    var alignLink = {  
      fontSize: "20px",
      textAlign:"center",
      padding: "2px"
     }

      return (
         <div >
         
                <Link to='/Home' style={alignLink}>Home</Link>
                <Link to='/Signup' style={alignLink}>Signup</Link>
                <Link to='/Signin' style={alignLink}>Signin</Link>
                <Link to='/Contact' style={alignLink}>Contact</Link>
                 <Link to='/ContactList' style={alignLink}>ContactList</Link>

                {this.props.children}
  
                  </div>
      );
   }
   
}

export default App;
