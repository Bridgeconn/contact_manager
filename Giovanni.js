
import React from 'react';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';




class Giovanni extends React.Component {
  //to initialise state create custructor
  constructor(props) {
   
  super(props);
  //initialise state
  this.state = {
    
    data: 'Initial data...', 
    }
  //returns a new function, in which references to 'this' will refer to 'this'
  this.confirm = this.confirm.bind(this);
 

  };
  //prevent event e 
  confirm(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }
  // //render divStyle css styling
  render() {
    var divStyle = {
      paddingLeft: "90px",
      color: "#2e6da4"
  };


     return (


         <div className ="row">
         <div className ="col-md-6">
              <PageHeader> <span style={divStyle}>Giovanni Detail</span> </PageHeader>
              <Form horizontal >
                </Form>
                </div>
                </div>
      );
   }
}

export default Giovanni;

