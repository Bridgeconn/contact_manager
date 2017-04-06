import React from 'react';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import { Route, IndexRoute, Link } from 'react-router';



class Signin extends React.Component {
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
              <PageHeader> <span style={divStyle}>  Signin Page </span> </PageHeader>
              <Form horizontal >
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> Email </Col>
                 <Col sm={6}>
                   <FormControl type="email" placeholder="Email" required="true"/>
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalPassword">
                 <Col componentClass={ControlLabel} sm={2}>Password </Col>
                 <Col sm={6}>
                  <FormControl type="password" placeholder="Password" />
                 </Col>
               </FormGroup>
               <FormGroup>
                 <Col smOffset={2} sm={4}>
                   <Checkbox>Remember me</Checkbox>
                 </Col>
               </FormGroup>
               <FormGroup>
                 <Col smOffset={2} sm={4}>
                   <input type="button" className="btn btn-primary" name="submit" value="Sign in" />

                 </Col>
               </FormGroup>
                </Form>
                </div>
                </div>
      );
   }
}

export default Signin;

