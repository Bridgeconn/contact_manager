import React from 'react';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


class App extends React.Component {
   render() {
      return (
         <div>

                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link> 
                <Link to='/ContactManager'>ContactManager</Link> 			
                {this.props.children}
         </div>
      );
   }
   
}

export default App;
