// https://www.greatfrontend.com/questions/javascript/mean?language=js

// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// Arguments
// array (Array): Array of numbers.
// Returns
// (Number): Returns the mean of the values in array.

// Examples
// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667
// The function should return NaN if array is empty.


// mean([]); // => NaN

let array = [1,2,1,2];

const findMean = function (array) {
  const n = array.length;
  if (n == 0) return NaN;

  const sum = array.reduce((accumulator, current) => accumulator + current, 0);
  return sum / n;
}

let mean = findMean(array);
console.log(mean);




