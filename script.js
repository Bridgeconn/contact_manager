var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'contactmanager'
});

connection.connect(function(error) {
    if(!!error) {
      console.log('Error');
    } else {
      console.log('Connected');
    }
})

var myself = {
  author: 'Himanshu Panbdey',
  title: 'User authenicate',
  body: 'contact_manager_book'
};

var query = connection.query('insert into myself set ?', myself, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});

connection.end();
