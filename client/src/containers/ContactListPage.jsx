import React, { PropTypes } from 'react';
import ContactListForm from '../components/ContactListForm.jsx';


class ContactListPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: ''
        
      }
    };

   
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <ContactListForm
       
        user={this.state.user}
      />
    );
  }

}

export default ContactListPage;
