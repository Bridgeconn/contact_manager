import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContactListForm from '../components/ContactListForm.jsx';


const name = [
  'John Smith',
  'Randal White',
  'Stephanie Sanders',
  'Banana',
  'Steve Brown',
  'Banana',
  
];
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 0,
    marginBottom: 5,
    fontWeight: 400,
  },
  cardWidth: {
    width: "90%",
  },
}
class ContactListPage extends React.Component {
  
  render () {
    return (

        <div>
          <div className="container">
          <div className="float-right">
            <AutoComplete
              floatingLabelText="Search-box"
              filter={AutoComplete.fuzzyFilter}
              dataSource={name}
              maxSearchResults={5}
              />
          </div>    
          </div>

          <ContactListForm/>
          
        </div>

    );    
  }

}

export default ContactListPage;
