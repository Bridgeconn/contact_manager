import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'


const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    
    textAlign: 'center',
    
    boxShadow:'none !important' 
  },
  paperRight:{
   flex: 1,
    height: '100%',
    
    textAlign: 'center',
    
    boxShadow:'none !important'
  },
   customWidth: {
    width: 300,
    paddingTop:15,
  },
  radioButton: {
    marginBottom: 16,
  }
};

const ContactForm = ({
  onSubmit,
  onChange,
  handleChange,
  errors,
  value,
  user
}) => (

  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Contact</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div style={styles.div}>
        <Paper  style={styles.paperLeft} >
          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              onChange={onChange}
              errorText={errors.name}
              value={user.name}
            />
          </div>
          </Paper>
         <Paper style={styles.paperRight}>
          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>
          </Paper>
          </div>
          <div style={styles.div}>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <TextField
              floatingLabelText="Mobile No."
              name="mobile_no"
              onChange={onChange}
              errorText={errors.mobile_no}
              value={user.mobile_no}
            />
          </div>
          </Paper>
          <Paper style={styles.paperRight}>
          <div className="field-line">
            <DropDownMenu value={value} onChange={handleChange} style={styles.customWidth}>
              <MenuItem value={1} primaryText="B.A." />
              <MenuItem value={2} primaryText="B.B.A" />
              <MenuItem value={3} primaryText="B.C.A" />
              <MenuItem value={4} primaryText="B.TECH" />
              <MenuItem value={5} primaryText="B.SCI" />
              <MenuItem value={6} primaryText="M.A." />
              <MenuItem value={7} primaryText="M.B.A" />
              <MenuItem value={8} primaryText="M.C.A" />
              <MenuItem value={9} primaryText="M.TECH" />
              <MenuItem value={10} primaryText="M.SCI" />
            </DropDownMenu>
          </div>
          </Paper>
          </div>
          <div style={styles.div}>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <TextField
              floatingLabelText="Address"
              name="address"
              onChange={onChange}
              errorText={errors.address}
              value={user.address}
            />
          </div>
          </Paper>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            

              <RadioButton
                value="light"
                label="Male"
                style={styles.radioButton}
              />
              <RadioButton
                value="not_light"
                label="Female"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            
          </div>
          </Paper>
          </div>
          <div className="button-line">
            <RaisedButton type="submit" label="Add Contact" primary />
          </div>
    </form>
  </Card>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired
};

export default ContactForm;
