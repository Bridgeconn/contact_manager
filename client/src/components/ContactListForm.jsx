import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
const ContactListForm = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn> 
        <TableHeaderColumn><RaisedButton label="View"/></TableHeaderColumn>

      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>       
        <TableHeaderColumn><RaisedButton label="View" href="/contact_details" /></TableHeaderColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
        
        <TableHeaderColumn><RaisedButton label="View" href="/contact_details"/></TableHeaderColumn>
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
        <TableHeaderColumn><RaisedButton label="View" href="/contact_details"/></TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>
);

// ContactListForm.propTypes = {
//   products[]: PropTypes.func.isRequired,
 
// };

export default ContactListForm;