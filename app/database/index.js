'use strict';

var config = require('../config');
var Mongoose = require('mongoose');
var logger = require('../logger');

// Construct the database URI
var dbURI = "mongodb+srv://sanandalshi:sanandalshi@cluster3.aapounj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";

// Connect to MongoDB with updated options
Mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Handle connection error
Mongoose.connection.on('error', function(err) {
	if (err) throw err;
});

// Use native JS promises
Mongoose.Promise = global.Promise;

module.exports = {
	Mongoose,
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};
