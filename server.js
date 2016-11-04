// Make sure that the database is running before starting the server
// Use ./mongod command on a separate window and leave it running

// Using mongoose middleware to interact with the database
var mongoose = require('mongoose');

// Connect to the local database
mongoose.connect('mongodb://localhost:27017/bears');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')// we're connected!
});

// Define the schema for our database record (row)
var Schema       = mongoose.Schema;
var BearSchema   = new Schema({
    name: String;
    time: String; // timestamp
    
});

// Create the prototype object that we will use to create all bears
var Bear = mongoose.model('Bear', BearSchema);

// Error handling function. See http://mongoosejs.com/docs/api.html#model_Model-save for details
// We declare this separately since we need to use it multiple times.
function mongoError(err, record) {
  if (err) {
    console.log("Could not save " + record.name + ": " + err);
  }
  else {
    console.log("Saved " + record.name);
  }
}

var b1 = new Bear(); // Create our first bear
b1.name = "Baloo";   // Set name
b1.time = Date();    // Set timestamp
b1.save(mongoError); // Save the bear in database

// create the second bear
// Why can't we reuse b1 by changing the name and timestamp and saving again? Try.
var b2 = new Bear();
b2.name = "Beorn";
b1.time = Date();
b2.save(mongoError);

//create the third bear
var b3 = new Bear();
b3.name = "Corduroy";
b1.time = Date();
b3.save(mongoError);

// Find all bears and print the full record
// Why does this only show records saved during previous runs (none on first run)
// Clues are in the order of the console log statements.
Bear.find( { name: /./}, console.log);
