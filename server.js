var mongoose = require('mongoose');
mongoose.Promise = require('promise');
mongoose.connect('mongodb://localhost:27017/bears');

var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

var Bear = mongoose.model('Bear', BearSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')// we're connected!
});

var saves=0;

var b1 = new Bear();
b1.name = "Baloo 3";
b1.save().then(function(b){
  console.log("Saved " + b.name);
  saves++;
});

var b2 = new Bear();
b2.name = "Beorn 3";
b2.save().then(function(b){
  console.log("Saved " + b.name);
  saves++;
});


var b3 = new Bear();
b3.name = "Corduroy 3";
b3.save().then(function(b){
  console.log("Saved " + b.name);
  saves++;
});

while (saves < 2) {}
Bear.find( { name: /./}, console.log);
//process.exit(0);