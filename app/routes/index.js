var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;
  var pageMeetups = data.meetups;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    meetups: pageMeetups,
    pageID: 'home'
  });

});

module.exports = router;
