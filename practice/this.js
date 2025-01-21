// 'use strict';

//this used globally with inbuilt function
// console.log(this); //{}


//this inside function gives parent object
function printThis() {
  console.log(this); //not strict mode: global object , Window obj, Strict-mode: undefined, undefined 
}
// printThis();




//nested function: Global Object{nonstrict} and undefined{strict}
function outer() {
  function inner() {
    console.log(this);
  }
  inner();
}
// outer();



//when 'this' inside traditional method of object, it returns object(both strict/nonstrict modes)
const person = {
  name: 'John',
  age: '20',
  printDetails: function () {
    console.log(this);
  }
}
// person.printDetails();




//when this inside arrow function, it ALWAYS returns {}(in integrated server) and Window Object(browser)
const person2 = {
  name: 'John',
  age: '20',
  printDetails: () => {
    console.log(this);
  }
}
// person2.printDetails();


function greet() {
  console.log(`hi my name is ${this.name}`); //gives object.name to which it is bound
}
const animal = { breed: 'dog', name: 'leo' };
const greetAnimal = greet.bind(animal);
greetAnimal();




