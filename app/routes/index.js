var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
  	  <head>
  	  	<link rel="stylesheet" type="text/css" href="css/style.css">
  	  </head>
      <h1>Welcome</h1>
      <img src="images/misc/background.jpg">
      <p>Roux Academy Meetups put together artists from all walks of life</p>
  `);
});

module.exports = router;
