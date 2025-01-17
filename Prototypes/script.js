//Difference btw traditional and Arrow methods when used inside objects.
// traditional method points to parent object
// Arrow method points to {}empty global object, or window object, since it doesnt have THIS BINDING, it inherits this from the enclosing scope(window or global)


const car1 = {
  name: "BMW",
  type: 'SEDAN',

  message: () => {
    console.log('Arrow function');
    console.log(`car name: ${this.name}, type: ${this.type}`);
    console.log(this);
  },

  message2: function () {
    console.log('Normal function');
    console.log(`Car name: ${this.name}, type: ${this.type},`, this);
    console.log(this);
  }
};

car1.message();
car1.message2();

// *************************************************************************************************************************************************


// Constructor Functions

function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.greet = () => {
  console.log(`I am ${this.name}, age is ${this.age}`);
}
Person.prototype.greet2 = function () {
  console.log(`I am ${this.name}, age is ${this.age}`);
}

const person1 = new Person("John", "10");
person1.greet();
person1.greet2();

const person2 = Object.create(Person.prototype);
person2.name = "Jerry";
person2.age = 20;
person2.greet();
person2.greet2();


// *************************************************************************************************************************************************


//print object details
const doAnything = ()=>{
  console.log('hello');
}
console.dir(Person);
console.dir(doAnything);



// *************************************************************************************************************************************************


var x = 5;
function outer(){
  function inner(){
    console.log(x);
  }
  var x = 10;
  inner();
}
outer();
// O/P: 10

// *************************************************************************************************************************************************


function add(x,y){
  return (x+y);
}
console.log(add(2,3,4));

//O/P: 5


// *************************************************************************************************************************************************




