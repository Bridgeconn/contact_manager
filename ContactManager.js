import React from 'react';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
     super(props);
  this.state = {
    data: 'Initial data...',
    email: '',
    password: '',
    passwordConfirm:''
  }
    this.confirm = this.confirm.bind(this);
   this.onInput = this.onInput.bind(this);

  };
     
  onInput(e) {
  this.setState({email:e.target.value, 
                password: e.target.value, 
                passwordConfirm: e.target.value});
   
  }


  confirm(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }
   render() {
     var divStyle = {
       paddingLeft: "90px",
       color: "blue"
     };
     return (
         <div className ="row">
         <div className ="col-md-6">
          <PageHeader> <h1><span style={divStyle}>Signup Page</span> </h1></PageHeader>
            <Form horizontal>
             <FormGroup controlId="formHorizontalEmail">
               <Col componentClass={ControlLabel} sm={2}> Email </Col>
               <Col sm={6}>
                 <FormControl type="text" placeholder="Email"  onChange={this.onInput}/>
                <p>{this.state.email}</p>
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalUser">
               <Col componentClass={ControlLabel} sm={2}>User Name</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="User Name" name="username"/>
               </Col>
             </FormGroup>
              <FormGroup controlId="formHorizontalAddress">
               <Col componentClass={ControlLabel} sm={2}>Address</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="Address" />
               </Col>
             </FormGroup>
              <FormGroup controlId="formHorizontalEducation">
               <Col componentClass={ControlLabel} sm={2}>last Education</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="last Education" />
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>Password </Col>
               <Col sm={6}>
                <FormControl type="text" pla1ceholder="Password" onChange={this.onInput}/>
                <p>{this.state.password}</p>
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>Confirm Password </Col>
               <Col sm={6}>
                <FormControl type="password"  placeholder="Confirm Password" onChange={this.onInput}/>
              <p>{this.state.passwordConfirm}</p>
               </Col>
             </FormGroup>
             <FormGroup>
               <Col smOffset={2} sm={4}>
                 <Checkbox>Remember me</Checkbox>
               </Col>
             </FormGroup>

             <FormGroup>
               <Col smOffset={2} sm={4}>
               <input type="submit" className="btn btn-primary" name="submit"  value="Sign Up" />
               </Col>
             </FormGroup>
              </Form>
              </div>
              <div className ="col-md-6">
              <PageHeader> <span style={divStyle}>  Signin Page </span> </PageHeader>
              <Form horizontal>
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> Email </Col>
                 <Col sm={6}>
                   <FormControl type="email" placeholder="Email" />
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
                   <input type="submit" className="btn btn-primary" name="submit"  value="Sign in" />

                 </Col>
               </FormGroup>
                </Form>
                </div>
                </div>
      );
   }
}

export default App;

