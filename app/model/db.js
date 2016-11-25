var mongoose = require('mongoose');
//mongoose.connect('mongodb://geronimost_alumno:alumno@mongodb-geronimost.alwaysdata.net/geronimost_mongdb1');
//mongoose.connect('mongodb://geronimost_alumno:alumno@ds029565.mlab.com:29565/prueba');

var meetupSchema = mongoose.Schema({
	place: String,
	topic: String,
	date: Date,
    hour: String
});


mongoose.model('Meetup', meetupSchema); 

var db = mongoose.connect('mongodb://geronimost_alumno:alumno@mongodb-geronimost.alwaysdata.net/geronimost_mongdb1');
//mongoose.connect('mongodb://localhost/test');