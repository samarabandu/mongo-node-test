var mongoose = require('mongoose');
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

var b1 = new Bear();
b1.name = "Baloo 1";
b1.save();

var b2 = new Bear();
b2.name = "Beorn 1";
b2.save();


var b3 = new Bear();
b3.name = "Corduroy 1";
b3.save();

Bear.find( { name: /./}, console.log);
//process.exit(0);