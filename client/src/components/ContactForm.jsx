import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ContactForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Contact</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          type="text"
          onChange={onChange}
          errorText={errors.name}
          value={user.name}
        />
      </div>

       <div className="field-line">
        <TextField
          floatingLabelText="Mobile No."
          type="number"
          name="number"
          onChange={onChange}
          errorText={errors.mobile_no}
          value={user.mobile_no}
        />
      </div>

       <div className="field-line">
        <TextField
          floatingLabelText="Education"
          type="text"
          name="education"
          onChange={onChange}
          errorText={errors.education}
          value={user.education}
        />
      </div>

       <div className="field-line">
        <TextField
          floatingLabelText="Address"
          type="text"
          name="address"
          onChange={onChange}
          errorText={errors.address}
          value={user.address}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="contact" primary />
      </div>
    </form>
  </Card>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ContactForm;
