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
        mobile_no:'',
        address:''

      },
      education:'M.C.A',
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
    console.log(event.target.name);
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

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
    const address = encodeURIComponent(this.state.user.address);
    const mobile_no = encodeURIComponent(this.state.user.mobile_no);
    const education = encodeURIComponent(this.state.education);
    const gender = encodeURIComponent(this.state.gender);
    

    
    const formData = `name=${name}&email=${email}&address=${address}&mobile_no=${mobile_no}&education=${education}&gender=${gender}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/add_contact');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure
        console.log(errors);
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
    console.log("Add Contact: " + formData);
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <ContactForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
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
