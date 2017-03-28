var mysql = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db'
});

// Connect to database.
connection.connect();

// Listen to POST requests to /users.
app.post('/form-data', function(req, res) {
  // Get sent data.
  var form-data = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO form-data SET ?', form-data,  function(err, result) {
    // Neat!
  });
  res.end('Success');
});