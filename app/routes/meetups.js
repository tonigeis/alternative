var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/meetups', function(req, res) {
  var meetups = require('.././model/meetups');
  meetups.findAllMeetups(function(err, meetups) {
    console.log(meetups);
    //res.send(meetups);
    res.render('meetups', {
      pageTitle: 'Next Meetups',
      meetups: meetups,
      pageID: 'meetups',
    });
  });
});

module.exports = router;