var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'contactmanager'
});

connection.connect();

connection.query('select * from myself', function(err, result) {
  console.log(result);
});
