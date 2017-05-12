import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const AfterLogin = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="AfterLogin"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

AfterLogin.propTypes = {
  secretData: PropTypes.string
};

export default AfterLogin;