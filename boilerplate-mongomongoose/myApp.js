require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI='mongodb+srv://hello:hello@zybookpractice.jw6un.mongodb.net/db1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

let Schema = mongoose.Schema;

let personSchema = new Schema ({
    name: {type: String, required:true},
    age: Number, 
    favoriteFoods:[String]

});

let Person = mongoose.model('Person', personSchema);

let zyPractice = new Person({
    name: "Zy Prac",
    age: 420

});
/* const someFunc = function(done) {
  ... do something (risky) ...
  if (error) return done(error);
  done(null, result);
}; */


//let Person;

const createAndSavePerson = (done) => {
  let janeDoe = new Person({
    name: "Jane Doe",
    age: 35,
    favoriteFoods: ["Crab", "Cake"]
});
    janeDoe.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, peopleFound){
    if (err) return console.log(err);
    done(null , peopleFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  });
  
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,function (err, removedDoc) {
      if(err) return console.log(err);
      done(null, removedDoc);
    });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.deleteMany({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
    favoriteFoods:[String]
  Person.find({favoriteFoods: foodToSearch}).sort({name: 'asc'}).limit(2).select('-age').exec(function(err, res) {
  done(err , res);
  });
 
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
