const express = require('express');
const app = express();

app.use('/contacts', require('./contacts'))

module.exports = app;