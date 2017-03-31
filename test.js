var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root@localhost',
  password : 'root',
  database : 'my_db'
});

connection.createConnection();

var testing ={
  t1: function(mail, value){
    console.log(mail);
    console.log(value);
  }
}

module.exports = testing;



