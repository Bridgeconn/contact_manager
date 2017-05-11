import React, { PropTypes } from 'react';
import ContactForm from '../components/ContactForm.jsx';


class ContactPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        name: '',
        email: '',
        address:'',
        mobile_no:''

      },
      
      education:'B.A.',
      gender:''
      
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
   handleOptionChange(changeEvent) {
    console.log(changeEvent.target.value);
    this.setState({
      gender: changeEvent.target.value
      
    });
    
  }

   handleChange(event, index, education){
    console.log(education);
    this.setState({education});
  }

  changeUser(event) {
    // console.log(event.target.name);
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    // console.log(user[field]);

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);    
    const mobile_no = encodeURIComponent(this.state.user.mobile_no);
    const address = encodeURIComponent(this.state.user.address);
    
    const formData = `name=${name}&email=${email}&mobile_no=${mobile_no}&address=${address}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('post', 'auth/add_contact');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    
    xhr.addEventListener('load', () => {

      if (xhr.status === 200) {
        
        // success
        // change the component-container state
        this.setState({
          errors: {}
        });
          console.log('hi');
         
        
      } else {
        // failure
        
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        
        console.log('how r u');
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
    // console.log("Add Contact: " + formData); 
  }
 

  
  /**
   * Render the component.
   */
  render() {
    return (
      <ContactForm
        onSubmit={this.processForm}
        changeUser={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        handleChange={this.handleChange}
        education={this.state.education} 
        handleOptionChange={this.handleOptionChange}
        gender={this.state.gender}     
      />
    );
  }

}

export default ContactPage;
