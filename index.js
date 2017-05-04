const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
require('./server/models').connect(config.dbUri);
const Contact = require('./server/models/contact');


const app = express();


app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session()); 

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


app.get("/add_contact", function(req, res) {
	console.log(req.currentUser);
res.sendFile(__dirname + '/server/static/index.html')
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

// app.get("/contact_list", function(req, res) {

// 	Contact.find({}, function(err, contacts) {
// 	  if (err) throw err;
// 	  console.log(contacts);
// 	});
//    // res.sendFile(__dirname + '/server/static/index.html')
// });

//request for get list of contact
app.get("/contact_list", function(req, res) {
	// console.log(req.session);
	Contact.find({}, function(err, foundData) { 
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
        	// console.log("hello")
            return res.status(200).send(foundData);
        }
    });
});


// start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000 or http://127.0.0.1:3000');
});
