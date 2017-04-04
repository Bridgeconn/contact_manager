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
 
  this.nameField = this.nameField.bind(this);
  this.numberField = this.numberField.bind(this);
  this.addressField = this.addressField.bind(this);
  // this.genderField = this.genderField.bind(this);
  this.cityField = this.cityField.bind(this);
  this.stateField = this.stateField.bind(this);
 

  }; 

  nameField(e){
    var name =e.target.value.trim();
    this.setState({name:name});
    console.log(name);

  }
  numberField(e){
    var number=e.target.value.trim();
    this.setState({number:number});
   if(isNaN(number)||number.indexOf(" ")!=-1||number.length!=10){
    console.log("please check the number  ")
   }
   else{
    console.log(number);

   }
  }
  addressField(e){
    var address=e.target.value.trim();
    this.setState({address:address});
    console.log(address);
  }
  // genderField(e){
  //   var gender=e.target.value.trim();
  //   this.setState({gender:gender});
  //   console.log(gender)
  // }
  cityField(e){
    var city=e.target.value.trim();
    this.setState({city:city});
    console.log(city)
  }
  stateField(e){
    var state=e.target.value.trim();
    this.setState({state:state});
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
                  <FormGroup>
               <Col sm={4}>
               <input type="button" className="btn btn-primary" name="submit" onClick={this.submit} value="Sign Up" />
               </Col>
             </FormGroup>
               </FormGroup>
                </Form>
                </div>
                </div>
      );
   }
}
export default Contact;

