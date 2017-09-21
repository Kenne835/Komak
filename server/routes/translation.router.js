var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');
var pool = require('../modules/pool.js');

router.post('/', function(req, res) {
  var postedBodyPart = req.body;
  var array = postedBodyPart.symptoms;
  console.log('ted is cool',req.body);
  console.log('here is the return I want:', postedBodyPart.bodypart);
  console.log('here is/are the symptom(s) I want:', postedBodyPart.symptoms);
  console.log(postedBodyPart);
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {

      var queryText = 'SELECT * FROM "translations" WHERE "value" LIKE $1 OR "value" LIKE $2 OR "value" LIKE ANY($3::varchar[]) OR "value" LIKE ANY($4::varchar[]);';
      db.query(queryText,
              [postedBodyPart.bodypart, postedBodyPart.limb, postedBodyPart.symptoms, postedBodyPart.comorbidity],
          function(errorMakingQuery, result){
            done();
            console.log('here is the result I want', result);
            if(errorMakingQuery) {
              console.log(errorMakingQuery);
              console.log('Attempted to query with', queryText);
              console.log('Error making query');
              res.sendStatus(500);
            } else {
              res.send(result.rows);
            }
          }); // end query
        } // end if
      }); // end pool
    });

    module.exports = router;
