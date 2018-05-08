var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopleDB');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    updated_at: Date,
    created_at: Date,
    firstName: { type: String, required: true },
    lastName: String,
    age: {type: Number, min: [10, 'too small, sorry']}
});

personSchema.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) { this.created_at = currentDate; }
    next();
});



var Person = mongoose.model('Person', personSchema, 'persons');

var david = new Person({ firstName: "David", lastName: "Smith", age: 25 });
var zack = new Person({ firstName: "Zack", lastName: "Hacohen", age: 30 });
var leah = new Person({ firstName: "Leah", lastName: "Hendler", age: 65 });
var bob = new Person({ firstName: "Bob", lastName: "Cohen", age: 30 });
var zoei = new Person({ firstName: "Zoei", lastName: "Ziv", age: 16 });
var roey = new Person({ firstName: "Roey", lastName: "Glot", age: 36});
// var baby = new Person({firstName: "Baby", lastName: "Boom", age: 3});
// console.log(david);
// roey.save (function (error, result){
//     if(error) { return console.error(error); }
//     console.log (result);
//   });
// david.save();
// zack.save();
// leah.save();
// bob.save();
// zoei.save (function (err, rslt){
//     if(err) { return console.error(err); }
//     console.log(rslt);
//   });
// baby.save (function (err, rslt){
//     if(err) { return console.error(err); }
//     console.log(rslt);
//   });

// Person.findOneAndUpdate({ age: 25 }, { firstName: 'Paul' }, {new: true}, function(err, person) {
//     if (err) throw err;
//     else console.log(person);
  });

// Person.findById('5af19ab9026fb30790a13fb8', function(err, person) {
//     if (err) throw err;
//     person.firstName = 'Tzah';
//     person.save(function(err) {
//       if (err) throw err;
//       else console.log(person);
//     });
//   });

var query = Person.find();
// console.log(query);

// Person.find({age: 25}, function (err, rslt){
//     if(err) { return console.error(err); }
//     console.log(rslt);
//   })

// Person.remove({ firstName: 'Bob' }, function(err) {
//     if (err) throw err;
//     console.log('Person deleted!');
//   });



/////////////////////////////////////////////////////////////////////////////////////////////////////

var beerSchema = new Schema({
    name: String,
    volume: Number,
    style: String
})

var Beer = mongoose.model('Beer', beerSchema, 'beers');

var corona = new Beer({ name: "Corona", volume: 4, style: "Light" });
corona.save();