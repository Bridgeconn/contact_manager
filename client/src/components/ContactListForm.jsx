import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ContactListForm = ({
 
  user
}) => (
  <Card className="container">    
  </Card>
);

ContactListForm.propTypes = {
  
  user: PropTypes.object.isRequired
};

export default ContactListForm;
