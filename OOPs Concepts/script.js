//create a class
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printDetails() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

//create a child class, Inhertiance
class FrontendDeveloper extends Person {
  constructor(name, age, gender, skills, city) {
    super(name, age, gender);
    this.skills = skills;
    this.city = city;
  }
  otherDetails() {
    console.log(`${this.name} has ${this.skills} skills`);
  }
}

//make a Person object
const person1 = new Person('Chetna', 35, 'F');

//make a FrontendDeveloper object
const frontendDeveloper = new FrontendDeveloper('Chetna', 35, 'F', 'Javascript, react, java sql', 'bangalore');

//print person object details
console.log(person1);
person1.printDetails();

//print frontendDeveloper object details
console.log(frontendDeveloper);
frontendDeveloper.otherDetails();

















//make an object without classes, using only constructor functions

//Drawback: for each object, separate function objects (printDetails()) will be created. waste of memory.

//constructor function
const newPerson = function (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.printDetails = function () {
    console.log(`${this.name} is ${this.age} years old, and is a ${this.gender}`);
  }
}


const person3 = new newPerson('Deepak', 35, 'male');
console.log(person3);
console.log(person3.hasOwnProperty('printDetails')); //true, for each object a separate printDetails() is created

const person4 = new newPerson('amit', 35, 'male');
console.log(person4);

const person5 = new newPerson('archita', 34, 'female');
console.log(person5);

//How can issue in line no. 42 be fixed?
// 1. use classes instead, class-level function objects get created only once andreused across objects.

class NewPerson {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printDetails() {
    console.log(`${this.name} is ${this.age} years old, and is a ${this.gender}`);

  }
}

//create NewPerson object
const newPerson1 = new NewPerson('Sobia', 38, 'Female');
console.log(newPerson1);
console.log(newPerson1.hasOwnProperty('printDetails')); //false, since printDetails is inside constructor prototype


const newPerson2 = new NewPerson('Ranjita', 38, 'Female');
console.log(newPerson2);

const newPerson3 = new NewPerson('Vasavraj', 40, 'Male');
console.log(newPerson3);


// 2. Use Constructor Function instaed of classes, and attach the generic function to the costructor-level protoype.
// when objects are created using Constructor functions, 2 prototypes are craeted(just like in classes also).
//    1. Constructior-level prototpye - created once, and shaed across all objects
//    2. Object-level prototype: gets created for each object.
// fix: if we attach the generice fucntion to the Constructior-level prototpye, each time a new object is created this same Constructior-level prototpye  will be shared. and inside it will be our generic function which also can be reused.

const newPersonConst = function (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
newPersonConst.prototype.printDetails = function () {
  console.log(`${this.name} is ${this.age} years old, and is a ${this.gender}`);

}

//make obejcts 

const newPersonConst1 = new newPersonConst('John', 12, 'M');
console.log(newPersonConst1);

const newPersonConst2 = new newPersonConst('Mary', 22, 'F');
console.log(newPersonConst2);

const newPersonConst3 = new newPersonConst('Stewart', 21, 'M');
console.log(newPersonConst3);
console.log(newPersonConst3.hasOwnProperty('printDetails'));

const Car = function (name, brand, type) {
  this.name = name;
  this.brand = brand;
  this.type = type;

  this.printDetails = function () {
    console.log(`${this.name} , ${this.brand}, ${this.type}`);
  }
}

const car1 = new Car("swift", 'Maruti', 'hatchback');
console.log(car1);
console.log(car1.printDetails);











//Object.create

let personPrototype = {
  printDetails: function () {
    console.log(`${this.name} is ${this.age} years old, and is a ${this.gender}`);
  }
}

const p1 = Object.create(personPrototype);
p1.name = 'barbie';
p1.age = 23;
p1.gender = 'female';

p1.printDetails();  //barbie is 23 years old, and is a female
console.log(p1);
// console.log(p1.anything()); //using prototype chaining, anything() is searchd in prototypes, when not found, hits null container, gives error: anythin() is not defined

class Animal {
  constructor(name, species, type) {
    this.name = name;
    this.species = species;
    this.type = type;
  }

  printDetails() {
    console.log(`${this.name} belongs to ${this.species} and is a ${this.type}}`);
  }

  printDetails2() {
    console.log(`${this.name} is a ${this.type}}`);
  }
}

const lion = new Animal('lion', 'leo', 'carnivore');
const tiger = new Animal('tiger', 'cats', 'carnivore');
const deer = new Animal('deer', 'cervidae', 'herbivore');
console.log(lion);


//now do smae thing using constructor functions, and no class

const Animal2 = function (name, species, type) {
  this.name = name;
  this.species = species;
  this.type = type;

  // this.printDetails = () => {
  //   console.log(`${this.name} belongs to ${this.species} and is a ${this.type}}`);
  // }

}

const zebra = new Animal2('zebra', 'Hippotigris', 'herbivore');
const dog = new Animal2('tiger', 'canis', 'carnivore');

console.log(zebra);
console.log(dog);

//manipulate constuctor object, insert printDetails() function inside it, instaed of making a new printDetails() object each time for different objects

Animal2.prototype.printDetails = () => {
  console.log(`${this.name} belongs to ${this.species} and is a ${this.type}}`);
}


//now manipulate global object(NEVE DO THIS)
// Animal2.prototype.__proto__.printDetails = () => {
//   console.log(`${this.name} belongs to ${this.species} and is a ${this.type}}`);
// }






