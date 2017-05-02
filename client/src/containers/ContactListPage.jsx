import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContactListForm from '../components/ContactListForm.jsx';


const name = [
  'John Smith',
  'Randal White'  
];

const styles={
searchbBoxAlign:{
  marginBottom:"50px",
}


};
class ContactListPage extends React.Component {
  
  render () {
    return (
        <div>
          <div className="">
            <div className="container-custom" >
              <AutoComplete
                // style={styles.searchbBoxAlign}
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
