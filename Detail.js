import React from 'react';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

var full_detail = require('./ContactList.js');

function full_Detail() {
  return {Detail: full_detail.name() + ' ' + full_detail.address};
}

console.log(full_Detail());
