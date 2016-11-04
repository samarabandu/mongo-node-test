// Make sure that the database is running before starting the server
// Use ./mongod command on a separate window and leave it running

// Using mongoose middleware to interact with the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bears');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')// we're connected!
});

// Use 'bluebird' Promise library with mongoose
mongoose.Promise = require("bluebird");

// Define the schema for our database record (row)
var Schema       = mongoose.Schema;
var BearSchema   = new Schema({
    name: String;
    time: String; // timestamp
});

// Create the prototype object that we will use to create all bears
var Bear = mongoose.model('Bear', BearSchema);

// Create the bear and set name and timestamp
var b1 = new Bear();
b1.name = "Winnie the Pooh";
b1.time = Date();

// save() method returns a JavaScript promise. 
// We use the .then() method of the promise to do something when promise is fulfilled
b1.save().then(function(b) {
  console.log("Saved " + b.name);
  Bear.find( { name: /./}, console.log);
});

Bear.find( { name: /./}, console.log);
//process.exit(0);