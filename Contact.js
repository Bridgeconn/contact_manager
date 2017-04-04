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



class Contact extends React.Component {
  //to initialise state create custructor
  constructor(props) {
   
  super(props);
  //initialise state
  this.state = {
    name:'',
    number:'',
    address:'',
    gender:'',
    city:'',
    state:''
  }
  //returns a new function, in which references to 'this' will refer to 'this'
  this.nameField = this.nameField.bind(this);
  this.numberField = this.numberField.bind(this);
  this.addressField = this.addressField.bind(this);
  // this.genderField = this.genderField.bind(this);
  this.cityField = this.cityField.bind(this);
  this.stateField = this.stateField.bind(this);
 

  }; 
  //method for inputfield name
  nameField(e){
     //var name : assigned dynamic value of name on event call
    var name =e.target.value.trim();
    //setState name value to name
    this.setState({name:name});
    //output name
    console.log(name);

  }
   //method for inputfield number
  numberField(e){
    //var number : assigned dynamic value of number on event call
    var number=e.target.value.trim();
     //setState number value to number
    this.setState({number:number});
    //if number is not a number or number is empty field or number is not equal to 10
   if(isNaN(number)||number.indexOf(" ")!=-1||number.length!=10){
    //error please check the number
    console.log("please check the number  ")
   }
   //else print number
   else{
    console.log(number);

   }
  }
  //method for inputfield address
  addressField(e){
     //var address : assigned dynamic value of address on event call
    var address=e.target.value.trim();
      //setState address value to address
    this.setState({address:address});
    //print address on console.log
    console.log(address);
  }
  // genderField(e){
  //   var gender=e.target.value.trim();
  //   this.setState({gender:gender});
  //   console.log(gender)
  // }
   //method for inputfield city
  cityField(e){
    //var city : assigned dynamic value of city on event call
    var city=e.target.value.trim();
    //setState city value to city
    this.setState({city:city});
    //print value to console log
    console.log(city)
  }
  //method for inputfield state
  stateField(e){
    //var state : assigned dynamic value of state on event call
    var state=e.target.value.trim();
    //setState state value to state
    this.setState({state:state});
    //print value to console log
    console.log(state)
  }
  confirm(e) {
    e.preventDefault();
    alert('The link was clicked.');
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
              <PageHeader> <span style={divStyle}>  Contact </span> </PageHeader>
              <Form horizontal >
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> Name </Col>
                 <Col sm={6}>
                   <FormControl type="text" placeholder="Name" onChange={this.nameField} />
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalPassword">
                 <Col componentClass={ControlLabel} sm={2}> Number </Col>
                 <Col sm={6}>
                  <FormControl type="text" placeholder="Number" onChange={this.numberField} />
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> Address </Col>
                 <Col sm={6}>
                   <FormControl type="text" placeholder="Address" onChange={this.addressField}/>
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> City </Col>
                 <Col sm={6}>
                   <FormControl type="text" placeholder="City" onChange={this.cityField}/>
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalEmail">
                 <Col componentClass={ControlLabel} sm={2}> State </Col>
                 <Col sm={6}>
                   <FormControl type="text" placeholder="State" onChange={this.stateField}/>
                 </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalPassword">
                 <Col componentClass={ControlLabel} sm={2}>Gender</Col>
                  <label>
                    
                    <input type="radio" name="myRadioInput" value="male"/>
                    <span>male</span>
                  </label>
                   <label>
                   
                    <input type="radio" name="myRadioInput" value="female"/>
                     <span>female</span>
                </label>
               </FormGroup>
               <FormGroup>
                 <Col smOffset={2} sm={4}>
                   <Checkbox>Remember me</Checkbox>
                 </Col>
                
               </FormGroup>
                 <FormGroup>
               <Col smOffset={4} sm={4}>
               <input type="button" className="btn btn-primary" name="submit" onClick={this.submit} value="Sign Up" />
               </Col>
               </FormGroup>
                </Form>
                </div>
                </div>
      );
   }
}
export default Contact;

