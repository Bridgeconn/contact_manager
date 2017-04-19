import React, { PropTypes } from 'react';
import ContactListForm from '../components/ContactListForm.jsx';



class ContactListPage extends React.Component {
	constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
  	}
  render(){
    return (
        <AutoComplete
            dataSource    = {this.state.dataSource}
            onUpdateInput = {this.onUpdateInput} />
        );
  }
}

export default ContactListPage;
