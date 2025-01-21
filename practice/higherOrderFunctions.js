
// A Higher Order Function is that:
// either takes one or more functions as arguements
// or returns a function
// or both



// Inbuilt JS HOF functions: 
// map, reduce, filter, forEach, some, every, find, findIndex, setTimeOut, setInterval, bind, call, apply.
// These HOF functions make JS powerful and declarative.


// example 1:
function applyOperation(operation, x, y) {
  return operation(x, y);
}

const sum = applyOperation((x, y) => x + y, 1, 1);
console.log(sum);  //2

const diff = applyOperation((x, y) => y - x, 5, 10);
console.log(diff); //5 


//example 2: 
function outer(x) {

  function inner() {
    console.log(x);
  }

  return inner;
}

const inner1 = outer('Hello');
inner1(); //Hello

const inner2 = outer('Bye');
inner2(); //Bye


//map

let arr = [1, 2, 3, 4, 5];
let result = arr.map((item) => item + 2);
console.log(arr);
console.log(result); //[3,4,5,6,7]

//filter
let evenArr = arr.filter((item) => {
  if (item % 2 == 0) return item;
})
console.log(evenArr); //[2,4]

// Or  

function isEven(item) {
  if (item % 2 == 0) return item;
}
let evenAr2 = arr.filter(isEven);
console.log(evenAr2); //[2,4]


// reduce 
let diffOfArr = arr.reduce((accumulator, current) => accumulator - current);
console.log(diffOfArr); //-13
let sumArr = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumArr); //15