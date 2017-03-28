var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db'
});

connection.connect(function(error) {
    if(!!error) {
      console.log('Error');
    } else {
      console.log('Connected');
    }
})


var query = connection.query('insert into formdat set ?', formdata, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});

connection.end();
