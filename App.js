import React from 'react';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


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
