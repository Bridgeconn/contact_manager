import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

console.log(Auth.isUserAuthenticated());
// console.log(localStorage)
const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Component Management</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
        <Link to="/logout">Logout</Link>
        <Link to="/add_contact">Add Contact</Link>
        <Link to="/contact_list">ContactList</Link>
        </div>
      ) : (
        <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};


export default Base;
