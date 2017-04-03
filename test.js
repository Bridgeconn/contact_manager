
var mysql = require('mysql');
var express = require('express'); 
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root@localhost',
  password : 'root',
  database : 'my_db'
});

connection.connect(function(error){
	if(error){
		console.log('error');
	}
	else{
		console.log('connected');
	}	
});
app.post('/my_db', function(req, res) {
  
  var user = req.body;

  var query = connection.query('INSERT INTO formdata SET ?', formdata,  function(err, result) {
 console.log('success');
  });
  res.end('Success');
});


// var testing ={
//   t1: function(mail, value){
//     console.log(mail);
//     console.log(value);
    
//   }
// }

// module.exports = testing;



