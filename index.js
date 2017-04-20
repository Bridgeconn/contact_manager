const express = require('express');
const bodyParser = require('body-parser');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');

// connect to our database & pass passport for configuration
require('./server/config/passport')(passport);
const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));


// required for passport
app.use(session({
	secret: 'himanshucodealwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// require('./server/routes/auth.js')(app, passport);
// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

