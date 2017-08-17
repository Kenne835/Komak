var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.post('/', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: password
    }
  });

  var mailOptions = {
    from: 'komakmedapp@gmail.com',
    to: req.body.email,
    subject: 'You have received an email from Komak: a MedApp for Pashtuns',
    text: 'Translations Here',
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
