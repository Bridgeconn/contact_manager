const express = require('express');
const app = express();
var path = require('path');
var Contact = require("../models/contact");

app.get('/add_contact',  function (req, res) {
	console.log("Controller User: " + req.user._id)
	res.sendFile(path.resolve(__dirname+'./../static/index.html'));
});

// Save contact in database after login
app.post('/add_contact', (req, res) => {
	var contact_data = {
		name: req.body.name,
		email: req.body.email,
		address: req.body.address,
		mobile_no: req.body.mobile_no,
		education: req.body.education,
		gender: req.body.gender,
		userId: req.user._id
	}
	var contact = new Contact(contact_data)
	contact.save(function(err, result) {
		if (err){
			console.log(err);
			return res.status(400).send({message: "Opps error occurred !!", contactSave: false});
		}
		else {
			  console.log("Contact saved successfully in database !!!");
			  return res.status(200).send({message: "Contact saved successfully !!", contactSave: true});

		}
	})
 });


app.get('/contact_list', function(req, res) {
	console.log(req.user)
	Contact.find({userId: req.user._id}, function(err, foundData) { 
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(foundData);
        }
    });
});


module.exports = app;

