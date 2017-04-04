var mysql = require('mysql');
var express = require('express'); 
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'example'
});

connection.connect(function(error){
	if(error){
		console.log('error');
	}
	else{
		console.log('connected');
	}	
});

	var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
 
})

	 connection.query('INSERT INTO example_1 (PersonsID, LastName, FirstName, Address) VALUES (?, ?, ?, ?)', ['7', 'l', 'r', 'address07'], function(err, results) {
      if (err) throw err;
      
         })
  connection.query('SELECT * FROM example_1', function(err, results) {
        if (err) throw err;
        console.log(results[0].PersonsID,results[1].PersonsID);
        console.log(results[0].LastName,results[1].LastName);
        console.log(results[0].FirstName,results[1].FirstName);
        console.log(results[0].Address,results[1].Address);
      })
  