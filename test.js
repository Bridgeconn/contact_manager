
var mysql = require('mysql');
var express = require('express'); 
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
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
// app.post('/my_db', function(req, res) {
  
//   var my_db = req.body;

//   var query = connection.query('INSERT INTO formdata SET ?', formdata,  function(err, result) {
//  console.log('success');

//   });
//   res.end('Success');
// });

app.get('/', function (req, res) {

   res.send('Hello World');
})
	var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

// var testing ={
//   t1: function(mail, value){
//     console.log(mail);
//     console.log(value);
    
//   }
// }

// module.exports = testing;



