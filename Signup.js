import React from 'react';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import { Route, IndexRoute, Link } from 'react-router'
import $ from 'jquery'
import test from './test';
class Signup extends React.Component {
  constructor(props) {

  super(props);
  this.state = {
   
    email: '',
    password: '',
    passwordConfirm:'',
    username:'',
    address:'',
    education:''
  }
  
  this.onEmail = this.onEmail.bind(this);
  this.onPassword = this.onPassword.bind(this);
  this.onConPassword = this.onConPassword.bind(this);
  this.inputUserField = this.inputUserField.bind(this);
  this.inputAddressField = this.inputAddressField.bind(this);
  this.inputEducationField = this.inputEducationField.bind(this);
  this.submit=this.submit.bind(this);
  };

  inputUserField(e){
    var username=e.target.value.trim();
    this.setState({username:username});
    return username;
  }
     
  onEmail(e) {
    var email = e.target.value.trim();
      this.setState({email:email})
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        console.log("incorrect email");
        return false;
      }
      else{
        console.log("correct email")
      }
  }

  onPassword(e){
    var password = e.target.value.trim();
    this.setState({password:password})
    return password;
  } 

  onConPassword(e){
    var passwordConfirm = e.target.value.trim();
    this.setState({passwordConfirm:passwordConfirm})
    var pass=this.state.password;

    if(pass!=passwordConfirm||pass==''|| pass.length<=3){
      document.getElementById("wrongpass").innerHTML="Wrong Password";
    }
    else{
      document.getElementById("wrongpass").innerHTML="correct Password";
    }
  }

  inputAddressField(e){
    var address=e.target.value.trim();
    this.setState({address:address});
  }

  inputEducationField(e){
    var education=e.target.value.trim();
    this.setState({education:education});
  }

submit(e){
  var value=this.state.password;
  var mail=this.state.email;
  var valueConfirm=this.state.passwordConfirm;
  var atpos = mail.indexOf("@");
  var dotpos = mail.lastIndexOf(".");
  
  if(value!=valueConfirm || value.length<=2){
    console.log("incorrect password");
  }
  else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
    console.log("incorrect email");
    return false;
  }
  else{

    console.log(mail);
    console.log(this.state.username);
    console.log(this.state.address);
     console.log(this.state.education);
     console.log(value);

    test.t1(mail , value);
    var fd = new FormData();
   }
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
            <Form horizontal onSubmit={this.submit}>
             <FormGroup controlId="formHorizontalEmail">
               <Col componentClass={ControlLabel} sm={2}> Email </Col>
               <Col sm={6}>
                 <FormControl type="email" placeholder="Email" onChange={this.onEmail}/>
                  
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalUser">
               <Col componentClass={ControlLabel} sm={2}>User Name</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="User Name" name="username" onChange={this.inputUserField}/>
             
               </Col>
             </FormGroup>
              <FormGroup controlId="formHorizontalAddress">
               <Col componentClass={ControlLabel} sm={2}>Address</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="Address" onChange={this.inputAddressField}/>
               </Col>
             </FormGroup>
              <FormGroup controlId="formHorizontalEducation">
               <Col componentClass={ControlLabel} sm={2}>last Education</Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="last Education" onChange={this.inputEducationField}/>
               </Col>
              
             </FormGroup>
             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>Password </Col>
               <Col sm={6}>
                <FormControl type="text" placeholder="Password" onChange={this.onPassword}/>
                
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
               <Col sm={6}>
                <FormControl type="text"  placeholder="Confirm Password" onChange={this.onConPassword}/>
                <p id="wrongpass"></p>
               </Col>
             </FormGroup>
             <FormGroup>
               <Col smOffset={2} sm={4}>
                 <Checkbox>Remember me</Checkbox>
               </Col>
             </FormGroup>

             <FormGroup>
               <Col smOffset={2} sm={4}>
               <input type="button" className="btn btn-primary" name="submit" onClick={this.submit} value="Sign Up" />
               </Col>
             </FormGroup>
              </Form>
              </div>
                </div>
      );
   }
}

export default Signup;

