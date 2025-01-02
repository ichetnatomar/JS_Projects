const person1 = {
  name: 'John',

  printDetails: function (hobbies) {
    console.log(`I am ${this.name}, I love ${hobbies.join(', ')}`);
  }
}


const person2 = {
  name: 'Jerry',
}

person1.printDetails(['swimming']);

person1.printDetails.apply(person2, [['running', 'swimming', 'singing']]);


//Filter Polyfill

let callback = (num) => (num % 2 == 1) ? true : false;


let nums = [1, 2, 3, 4, 5, 6, 7, 8];

const ans = nums.filter((num) => {
  if (callback(num)) {
    return num;
  }
});

// function callback(num) {
//   if (num % 2 == 0)
//     return true;

//   return false;
// }

console.log(ans);



//Reduce

//add all elements of nums

let total = nums.reduce((sum, current) => sum + current, 0); //inbuilt reduce function
console.log('sum of array is: ' + total);

//reduce polyfill

let callbackSum = (sum, currentVal) => sum * currentVal;

Array.prototype.myReduce = function (callbackSum, initialValue) {

  let sum = initialValue;  //assuming that user provides accumulator's initial value
  let startIdx = 0;

  if (arguments.length == 1) {  //if initial value for accumulator is not provided by user, and arguements[] length = 1
    sum = this[0]; //first element of array
    startIdx = 1; //start from second index
  }

  for (let x = startIdx; x < this.length; x++) {
    sum = callbackSum(sum, this[x]);
  }
  return sum;

}

let total2 = nums.myReduce(callbackSum, 1);
console.log('sum of array using reduce polyfill: ' + total2);
