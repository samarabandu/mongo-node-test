// Sample JavaScript code to use 'mongoose' library
// Written by Jagath Samarabandu © 2016
// Make sure that the database is running before starting the server
// Use ./start-mongodb command on a separate window and leave it running

// Step 1: Using mongoose middleware to interact with the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bears');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('1. Connected to database')// we're connected!
});

// Use 'bluebird' Promise library with mongoose
// Oct 29, 2019: Blubird library may now be outdated. Try require("promise")
mongoose.Promise = require("bluebird");

// Define the schema for our database record (row)
var Schema       = mongoose.Schema;
var BearSchema   = new Schema({
    name: String,
    time: String // timestamp
});

// Create the prototype object that we will use to create all bears
var Bear = mongoose.model('Bear', BearSchema);

// Step 2a: Create a bear object and set its properties
var b1 = new Bear();
b1.name = "Winnie the Pooh";
b1.time = (new Date()).toLocaleString();;

// Step 2b: save the model
// save() method returns a JavaScript promise. 
// We use the .then() method of the promise to do something when promise is fulfilled
b1.save().then(function(b) {
  console.log("2. Saved " + b.name);
  Bear.find( { name: /./}, console.log);
});

// Step 3: Find all bears
// This still gets run before the save method above has finished.
console.log("3. Retrieving all records");
Bear.find( { name: /./}, console.log);
