import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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
  changeUser,
  handleChange,
  handleOptionChange,
  errors,
  education,
  user,
  gender
}) => (

  <Card className="container">
    <form action="/" onSubmit={onSubmit} >
      <h2 className="card-heading">Contact</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
      
      <div style={styles.div}>
        <Paper  style={styles.paperLeft} >
          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              onChange={changeUser}
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
              onChange={changeUser}
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
              name="mobile"
              onChange={changeUser}
              errorText={errors.mobile}
              value={user.mobile}
            />
          </div>
          </Paper>
          <Paper style={styles.paperRight}>
          <div className="field-line">
            <DropDownMenu value={education} onChange={handleChange} style={styles.customWidth}>
              <MenuItem value={'B.A.'} primaryText="B.A." />
              <MenuItem value={'B.B.A.'} primaryText="B.B.A" />
              <MenuItem value={'B.C.A.'} primaryText="B.C.A" />
              <MenuItem value={'B.TECH.'} primaryText="B.TECH" />
              <MenuItem value={'B.SCI.'} primaryText="B.SCI" />
              <MenuItem value={'M.A.'} primaryText="M.A." />
              <MenuItem value={'M.B.A.'} primaryText="M.B.A" />
              <MenuItem value={'M.C.A.'} primaryText="M.C.A" />
              <MenuItem value={'M.TECH.'} primaryText="M.TECH" />
              <MenuItem value={'M.SCI.'} primaryText="M.SCI" />
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
              onChange={changeUser}
              errorText={errors.address}
              value={user.address}
            />
          </div>
          </Paper>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={handleOptionChange}>
              <RadioButton
                value="male"
                label="Male"
                style={styles.radioButton}
              />
              <RadioButton
                value="female"
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
  changeUser: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  education: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default ContactForm;
