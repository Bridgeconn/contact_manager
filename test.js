var mysql = require('mysql');
var express = require('express');
var path = require('path');
var url = require('url');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db'
});

connection.connect();
app.use(t1)
// app.post('/', function(req, res) {
//   var user = req.body;
//   var query = connection.query('INSERT INTO formdata SET ?', formdata,  function(err, result) {

//   });
//   res.end('Success');
// });
app.get('/', function(req, res){
    res.send('Hello World');
});

var testing ={
  t1: function(mail, value){
    console.log(mail);
    console.log(value);
  }
}

module.exports = testing;



