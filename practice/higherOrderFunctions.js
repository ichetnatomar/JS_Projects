
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

// ****************************************************************************************************************************************




//map

let arr = [1, 2, 3, 4, 5];
let result = arr.map((item) => item + 2);
console.log(arr);
console.log(result); //[3,4,5,6,7]


// map polyfill
//   1. has inbuilt NodeIterator
//   2. accepts a callback
//   3. returns a resut Array

Array.prototype.myMap = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('not an array');
  }

  let result = [];

  for (let x = 0; x < this.length; x++) {
    result.push(callback(this[x]));
  }
  return result;
}
console.dir(Function.prototype);

let resultArr = arr.myMap(item => item - 2);
console.log('using map prototype-->', resultArr);



// ****************************************************************************************************************************************




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

//filter polyfill
// filter polyfill is added to Array prototype. 
// 1. has inbuilt iterator 
// 2. accepts a callback that based on some criteria returns true or false whether that item should be added to result[] or not 
// 3. returns a new result array 

Array.prototype.myFilter = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('not an array');
  }
  let filteredArr = [];

  for (let x = 0; x < this.length; x++) {
    if (callback(this[x])) {
      filteredArr.push(this[x]);
    }
  }
  return filteredArr;
}

const oddArr = arr.myFilter((item) => {
  if (item % 2 == 0) return true;
  return false;
})
console.log('filter polyfill-->', oddArr);


// ****************************************************************************************************************************************



// reduce 
let diffOfArr = arr.reduce((accumulator, current) => accumulator - current);
console.log(diffOfArr); //-13
let sumArr = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumArr); //15

//reduce polyfill
// 1. has inbuilt itertor 
// 2. boild down the entire array to single Value depending on callback
// 3. accepts a callback
Array.prototype.myReduce = function (callback, initialValue) {
  if (!Array.isArray(this)) {
    throw new Error('not an array');
  }
  let accumulator;
  let startIdx;

  if (initialValue === undefined) //initial value not passed by user, so take arr[0] as initialValue
  {
    accumulator = this[0];
    startIdx = 1;
  }
  else {
    accumulator = initialValue;
    startIdx = 0;
  }

  for (let x = startIdx; x < this.length; x++) {
    accumulator = callback(accumulator, this[x]);
  }
  return accumulator;

}

let diffValue = arr.myReduce((accumulator, current) => accumulator - current);
let sumValue = arr.myReduce((accumulator, current) => accumulator + current, 0);

console.log('reduce polyfill-->', diffValue);
console.log('reduce polyfill-->,', sumValue);