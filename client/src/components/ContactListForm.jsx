import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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
class ContactListForm extends React.Component {
render () {
    return (

  <Card style={styles.cardWidth} className="container">>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn> 
        <TableHeaderColumn>show</TableHeaderColumn>

      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>       
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
        
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>
  </Card>
    )
  }
}

export default ContactListForm;

