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
import Signin from './Signin';

//
class Signup extends React.Component {
  //
  constructor(props) {
    //
  super(props);
  //
  this.state = {
    email: '',//email field
    password: '',//for password field
    passwordConfirm:'',//for confirm password field
    username:'',//for username field
    address:'',//for address field
    education:''//for last education field
  }
  //returns a new function, in which references to 'this' will refer to 'this'
  this.onEmail = this.onEmail.bind(this);
  this.onPassword = this.onPassword.bind(this);
  this.onConPassword = this.onConPassword.bind(this);
  this.inputUserField = this.inputUserField.bind(this);
  this.inputAddressField = this.inputAddressField.bind(this);
  this.inputEducationField = this.inputEducationField.bind(this);
  this.submit=this.submit.bind(this);
  };
  //function for dynamic usename value 
  inputUserField(e){
    //var username :assigned dynamic value of username on event call
    var username=e.target.value.trim();
    //setstate username value to username
    this.setState({username:username});
    //return username 
    return username;
  }
    // function for email value validation and getting email value
  onEmail(e) {
    //var email :assigned dynamic value of email on event call
    var email = e.target.value.trim();
    //setstate email value to email
      this.setState({email:email})
      //var atpos get the value of @
      var atpos = email.indexOf("@");
      //var dotpos get "." value next to @
      var dotpos = email.lastIndexOf(".");
      //if value of @ is not present or dotpos less then atpos+2 or dotpos+2 more then email.length 
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        //write to console: incorrect email
        console.log("incorrect email");
        //return false
        return false;
      }
      else{
        //else correct email
        console.log("correct email")
      }
  }
  //function getting password value onchange event
  onPassword(e){
    //assigning dynamic value of passwword to var password using e.target.value
    var password = e.target.value.trim();
    //setstate password to dynamic value
    this.setState({password:password});
    //return password
    return password;
  } 
  //function for validate password or match password to confirm password
  onConPassword(e){
    //assigning dynamic value of confirm password to var passwordConfirm using e.target.value
    var passwordConfirm = e.target.value.trim();
    //setstate passwordConfirm to dynamic value
    this.setState({passwordConfirm:passwordConfirm})
    //assign the password value to pass 
    var pass=this.state.password;
    //if pass and passConfirm not same or password field isempty or password length is less than 3
    if(pass!=passwordConfirm||pass==''|| pass.length<=3){
      //wrong password 
      document.getElementById("wrongpass").innerHTML="Wrong Password";
    }
    else{
      //else correct password
      document.getElementById("wrongpass").innerHTML="correct Password";
    }
  }
  //function for getting address field
  inputAddressField(e){
     //assigning dynamic value of address to var address using e.target.value
    var address=e.target.value.trim();
     //setstate address to dynamic value
    this.setState({address:address});
  }
  //function for getting education field
  inputEducationField(e){
     //assigning dynamic value of education  to var education using e.target.value
    var education=e.target.value.trim();
     //setstate education to dynamic value
    this.setState({education:education});
  }
  //calling on submit form 
  submit(e){
   //assigne password value  to passwordValue
    var passwordValue=this.state.password;
    //assigne email value  to emailValue
    var emailValue=this.state.email;
    //assigne password value  to valueConfirm
    var valueConfirm=this.state.passwordConfirm;
   //var atpos get the value of @
    var atpos = emailValue.indexOf("@");
    //var dotpos get "." value next to @
    var dotpos = emailValue.lastIndexOf(".");
    //if pass and passConfirm not same or password field isempty or password length is less than 3
    if(passwordValue!=valueConfirm || passwordValue.length<=3){
    //output incorrect password
      console.log("incorrect password");
    }//if value of @ is not present or dotpos less then atpos+2 or dotpos+2 more then email.length 
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length) {
    //incorrect email
    console.log("incorrect email");
    //return false
    return false;
    }
    //else all validation checked, assinge all value to param variable or obj
    else{
      var params = {
        username:this.state.username,
        email:emailValue,
        address:this.state.address,
        education:this.state.education,
        password:passwordValue
      }
        console.log(params);
    
   // fetch('/', { 
   //      method: 'POST',
   //      data: params
   //    })
      
    }
  }
  //render divStyle css styling
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

