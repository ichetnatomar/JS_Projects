//gloabl function, no need to bind just pass as argument the object
// function greet(person) {
//   console.log(`Hi, I am ${person.name}`);
// }

// greet(person);

//when you want to use method of another object for your own object, and call at later time, then use BIND
const person1 = {
  name: 'Jerry',
  age: 10,
  greet: function () {
    console.log(`Hi, I am ${this.name}`);
  }
}

const person2 = { name: 'John', age: 20 };

// person1.greet.call(person2); //when you want to call immediately

// const greetPerson2 = person1.greet.bind(person2);
// console.dir(greetPerson2); //[[BoundThis]] object  = person2 Object 
// greetPerson2();




//Bind Polyfill
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(' not a function');
  }

  const symbol = Symbol(); //to avoid naming conflicts of attributes within an object

  context[symbol] = this; //function added as attribute inside object

  return function () { //a function is returned that whenever called, call the binded function.

    const ans = context[symbol](); //binded function is called
    delete context[symbol]; //function that was added as attribute is now deleted, CLEANUP
    return ans; //ans is returned

  }
}

const greetPerson2 = person1.greet.myBind(person2);
greetPerson2();


//Call Polyfill

Function.prototype.myCall = function (context = {}, ...args) {

  if (typeof this !== 'function') {
    throw new Error(' not a function');
  }

  const symbol = Symbol();
  context[symbol] = this;
  const ans = context[symbol]();

  delete context[symbol];

  return ans;
}
// person1.greet.myCall(person2);
















