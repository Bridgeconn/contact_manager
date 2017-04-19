import React, { PropTypes } from 'react';
import ContactListForm from '../components/ContactListForm.jsx';

class ContactListPage extends React.Component {
	constructor(props) {
    super(props);
    // set the initial component state
    this.state = {
     searchText: 'gfhjyd',
     
      }
     
    };
 
 
  render(){

    return (
        <ContactListForm
        	searchText={this.state.searchText}
         
        />
       
      )

}
}

export default ContactListPage;
