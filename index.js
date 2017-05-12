const express = require('express');
var session = require('express-session')
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
require('./server/models').connect(config.dbUri);
const Contact = require('./server/models/contact');


// Init App
const app = express();

app.set('trust proxy', 1) // trust first proxy


// Set Static Folder
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(cors());
app.use(session({secret:'dkanhdad838ytebeagadb62ye8qy4qbaudte7qheb89902', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }));

// Passport init
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


app.get("/login", function(req, res) {
	
	res.sendFile(__dirname + '/server/static/index.html')
});

app.get("/signup", function(req, res) {
	
	res.sendFile(__dirname + '/server/static/index.html')
});

app.use(require('./server/controllers'));

// start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000 or http://127.0.0.1:3000');
});
