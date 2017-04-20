const express = require('express');
const validator = require('validator');
const connection = require('../config/db.js');
var passport = require('passport');

const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.get('/', function(req, res) {
    res.render('HomePage.jsx'); // load the index.ejs file
});


router.get('/signup', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('SignUpPage,jsx', { message: req.flash('signupMessage') });
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/add_contact', 
    failureRedirect : '/signup'
    }), (req, res) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });

  }else{
    //Here we can save/fetch data from database.
    var user={
      "Name":req.body.name,
      "Email":req.body.email,
      "Password":req.body.password
    }

  connection.query('INSERT INTO dbsignup SET ?',user, function (error, results, fields) {
  if (error) {
    console.log("Error ocurred",error);
  }else{
    console.log('\n Signup form data inserted successfully: \n', results);
  }
  });

  }
  return res.status(200).end();
});




router.get('/login', function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('LoginPage.jsx', { message: req.flash('loginMessage') });

});
  console.log("Hello I am auth !!!!!!!!!!!!!");

router.post('/login', passport.authenticate('local-login', {
            successRedirect : '/add_contact', 
            failureRedirect : '/login' 
        }), (req, res) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }else{
    //Here we can save/fetch data from database.

  if (req.body.remember) {
    req.session.cookie.maxAge = 1000 * 60 * 3;
  } else {
      req.session.cookie.expires = false;
    }

  var user={
      "Email":req.body.email,
      "Password":req.body.password
    }

  connection.query('INSERT INTO dbsignin SET ?',user, function (error, results, fields) {
  if (error) {
    console.log("Error ocurred",error);
  }else{
    console.log('\n Signin form data inserted successfully:\n ', results);
  }
  });

  }

  return res.status(200).end();
});

module.exports = router;
