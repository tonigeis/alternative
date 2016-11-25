var mongoose = require('mongoose');  

exports.findAllMeetups = function (callback){

	var Meetup = mongoose.model('Meetup');

	Meetup.find().sort({date : 'desc'}).exec(function(err, meetups) {
	    if (err) {
	      console.log(err);
	    } else {
	      //console.log(meetups);
	      callback("", meetups);
	    }
  	});

};//ends exports findAllMeetups sorted by date asc

