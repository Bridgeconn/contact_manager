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
  constructor(props){
    super(props);
  }
render () {
    return (

  <Card style={styles.cardWidth} className="container">>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn> 
        <TableHeaderColumn>Email</TableHeaderColumn>

      </TableRow>
    </TableHeader>
    <TableBody>
      
        {
          this.props.contactData.map(function(data){
            return(<TableRow><TableRowColumn>{data.id}</TableRowColumn>
                <TableRowColumn>{data.name}</TableRowColumn>
              <TableRowColumn>{data.address}</TableRowColumn>
              <TableRowColumn>{data.email}</TableRowColumn></TableRow>
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

