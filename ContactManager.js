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
  this.onEmail = this.onEmail.bind(this);
  this.onPassword = this.onPassword.bind(this);
  this.onConPassword = this.onConPassword.bind(this);


  };
     
  onEmail(e) {
  var email = e.target.value.trim();
    this.setState({email:email})
    var emailParts = email.split('@');
  if(emailParts.length !==1 ) {
        alert("Wrong number of @ signs");
        return false;   
    }

    var emailName = emailParts[0];
    var emailDomain = emailParts[1]
    if(emailName.length < 1 || emailDomain.length < 3) {
        alert("Wrong number of characters before or after @ sign");
        return false;
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

  if(pass!=passwordConfirm){
    alert("not correct password");
  }
  else{
    alert("correct password");
  }
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
                 <FormControl type="email" placeholder="Email" onChange={this.onEmail} required="true"/>
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
                <FormControl type="text" placeholder="Password" onChange={this.onPassword}/>
                
               </Col>
             </FormGroup>
             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
               <Col sm={6}>
                <FormControl type="text"  placeholder="Confirm Password" onChange={this.onConPassword}/>
              
               </Col>
             </FormGroup>
             <FormGroup>
               <Col smOffset={2} sm={4}>
                 <Checkbox>Remember me</Checkbox>
               </Col>
             </FormGroup>

             <FormGroup>
               <Col smOffset={2} sm={4}>
               <input type="submit" className="btn btn-primary" name="submit" onClick={this.onConPassword} value="Sign Up" />
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

