var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ContactManager'
});

var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


app.post('/signup', function(req,res){
  console.log(req.body);
   var users={
     "Name":req.body.Name,
     "Email":req.body.Email,
     "password":req.body.password
   }
   connection.query('INSERT INTO signup SET ?',users, function (error, results, fields) {
   if (error) {
     console.log("error ocurred",error);
     res.send({
       "code":400,
       "failed":"error ocurred"
     })
   }else{
     res.send({
       "code":200,
       "success":"user registered sucessfully"
         });
   }
   });

}