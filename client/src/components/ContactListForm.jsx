import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  
  cardWidth: {
    width: "90%",
  },
  
};

class ContactListForm extends React.Component {
  constructor(props){
    super(props);
  }
render () {
    return (
 
  <Card className="container" style={styles.cardWidth}>
   <h2 className="card-heading">contact-list</h2>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn> 
        <TableHeaderColumn>Mobile No.</TableHeaderColumn>
        <TableHeaderColumn>Education</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {
          this.props.contactData.map(function(data, i){
            return(
              <TableRow key={i}>
                <TableRowColumn key={i}>{data.id}</TableRowColumn>
                <TableRowColumn key={i}>{data.name}</TableRowColumn>
                <TableRowColumn key={i}>{data.email}</TableRowColumn>
                <TableRowColumn key={i}>{data.mobile_no}</TableRowColumn>
                <TableRowColumn key={i}>{data.education}</TableRowColumn>
                <TableRowColumn key={i}>{data.address}</TableRowColumn>
              </TableRow>
            )
          })
        } 
    </TableBody>
  </Table>
  </Card>
    )
  }
}

export default ContactListForm;

