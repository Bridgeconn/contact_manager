import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContactListForm from '../components/ContactListForm.jsx';
import $ from "jquery";

const name = [
  'John Smith',
  'Randal White'  
];

class ContactListPage extends React.Component {
  constructor(props){
    super(props);
    var _this = this;
    this.state = {
      contactList: []
    }
    
    $.ajax({
          url: "/contact_list",
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

        <div>
          <div className="container-custom">
          
            <AutoComplete
              floatingLabelText="Search-box"
              filter={AutoComplete.fuzzyFilter}
              dataSource={name}
              maxSearchResults={5}
              />
      
          </div>

          <ContactListForm contactData = {this.state.contactList}/>
          
        </div>

    );    
  }

}

export default ContactListPage;
