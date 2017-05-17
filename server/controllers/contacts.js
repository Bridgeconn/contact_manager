const express = require('express');
const app = express();
var path = require('path');

app.get('/add_contact',  function (req, res) {
	console.log("Controller User: " + req.user)
	res.sendFile(path.resolve(__dirname+'../../static/index.html'));
});

// Save contact in database after login
app.post('/add_contact', (req, res) => {
	var contact = new Contact(req.body)
	contact.save(function(err, result) {
		if (err){
			console.log(err);
		}
		else {
		    console.log("Contact saved successfully in database !!!");
		}
	})
 });


app.get('/contact_list', function(req, res) {
	Contact.find({}, function(err, foundData) { 
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(foundData);
        }
    });
});


module.exports = app;

