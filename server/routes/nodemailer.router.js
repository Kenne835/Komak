var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var username = require('../config.js').username;
var password = require('../config.js').password;


router.post('/', function(req, res, next) {
  console.log('stuff to be sent via email', req.body);
  var emailAddress = req.body.translation.postedBodyPartArray[0].translation;
  console.log('emailAddress is', emailAddress);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: password
    }
  });

  var string ="";
  for (var i = 0; i < req.body.translation.postedBodyPartArray.length; i++) {
    string += req.body.translation.postedBodyPartArray[i].translation + " ";
    console.log('this is string', string);
  }

  var mailOptions = {
    from: 'komakmedapp@gmail.com',
    to: req.body.email.email,
    subject: 'You have received an email from Komak: a MedApp for Afghans',
    text: 'An intake form has been filled out by a patient. The evaluation has been translated from Pashto into English and you may see the results here: ' + 'My name is ' + req.body.name + '. ' + string
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

module.exports = router;
