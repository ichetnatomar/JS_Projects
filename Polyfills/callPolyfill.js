const { ConcatenationScope } = require("webpack");

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
Function.prototype.myCall = function(context = {}, ...args){
  if(typeof this === 'function'){

    //handle Primitives
    context = Object(context);

    //use Symbol to handle property naming conflicts
    const symbol = Symbol();

    //add function to context
    context[symbol] = this;

    //call function and store returned value in variable
    const ans = context[symbol](...args);

  

    //perform cleanup:remove added function prperty from context 
    delete context[symbol];

    //return ans
    return ans;
  }
}

printDetails.myCall(person1);
printDetails.myCall(1);



console.log(Object.getOwnPropertySymbols(person1)); // to retrieve Symbol() properties of an object

