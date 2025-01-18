function printDetails(hobbies = []) {
  console.log(`I am ${this.name}, age is ${this.age}. My hobbies are: ${hobbies}`);
}

const person = {
  name: "John",
  age: 25
}

const hobbies = ['swimming', 'badminton', 'gymming'];
printDetails.apply(person, [hobbies]); //hobbies array is passed wrapped around an array
// I am John, age is 25. My hobbies are: swimming,badminton,gymming



//Appy Polyfill

Function.prototype.myApply = function (context = {}, argsArr = []) {

  if (typeof this !== 'function') {
    throw new Error();
  }

  context = Object(context); // handle primitivea

  const symbol = Symbol(); // to avoid naming conflicts of object properties

  context[symbol] = this; //function added as object property 

  const ans = context[symbol]([argsArr]); //function called and stored ina variable

  delete context[symbol]; //delete function, cleanup

  return ans;
}

const ans = printDetails.myApply(person, [['singing', 'dancing', 'sleeping']]); //I am John, age is 25. My hobbies are: singing,dancing,sleeping

console.log(printDetails.myApply(1, [hobbies])); //I am undefined, age is undefined. My hobbies are: swimming,badminton,gymming

