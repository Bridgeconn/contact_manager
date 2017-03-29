var mysql = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
  host     : 'localhost'
  user     : 'root',
  password : 'root',
  database : 'my_db'
});


connection.connect();


app.post('/Signup', function(req, res) {
  var user = req.body;
 
  var query = connection.query('INSERT INTO formdata SET ?', formdata,  function(err, result) {
  
  });
  res.end('Success');
});