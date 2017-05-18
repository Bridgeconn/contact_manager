import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContactListForm from '../components/ContactListForm.jsx';
import $ from "jquery";


class ContactListPage extends React.Component {
  constructor(props){
    super(props);
    var _this = this;
    this.state = {
      contactList: []
    }
    
    $.ajax({
          url: "/contacts/contact_list",
          type: 'get',
          headers: {
            'Content-Type':'application/json'
          },
          dataType: 'json',
          success: function(response){
            _this.setState({contactList: response})
          },
          error: function(response){
             _this.setState({contactList: []})
          }
    });

  }
  
  render () {
    return (
      <ContactListForm contactData = {this.state.contactList}/>          
    );    
  }

}

export default ContactListPage;
