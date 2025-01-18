function printDetails(obj) {
  console.log(`I am ${this.name}, age is ${this.age}`);
}

const person1 = {
  name: 'mary',
  age: 10,
};


//Call(): when call() is called upon any function, it shifts the binding of 'this' from function to passed object, and then the function is executed.

// printDetails.call(person1);

//Call Polyfill
Function.prototype.myCall = function (context = {}, ...args) {

  context.myFunction = this;
  context.myFunction();
  delete context.myFunction;

}

printDetails.myCall(person1);
