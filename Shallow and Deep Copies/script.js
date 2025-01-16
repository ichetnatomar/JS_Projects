
let arr = [1, 2, 3, [4, 5, 6, { 'name': 'Chetna' }]];


let nestedObj = {
  name: "Alice",
  details: {
    age: 23,
    gender: 'F',
    nationality: "american",
    hobbies: ['swimming', 'running', 'badminton'],
  },
  greet: function () {
    console.log('Hello there.');
  }
};

function deepClone(input) {

  //handle base case: when value is simple primitive value
  if (typeof input !== 'object') {
    return input;
  }


  //handle arrays
  if (Array.isArray(input) === true) {

    let cloneArr = [];

    for (let x = 0; x < input.length; x++) {
      cloneArr[x] = deepClone(input[x]);
    }
    return cloneArr;
  }

  let clone = {};

  //handle methods
  if (typeof input == 'function') {
    input.bind(clone);
    return clone;
  }



  let keys = Object.keys(input); //gives all keys of that object

  for (let x = 0; x < keys.length; x++) {
    clone[keys[x]] = deepClone(input[keys[x]]);
  }

  return clone;
}

const clone = deepClone(nestedObj);
console.log('original object: ', nestedObj);
console.log('clone created: ', clone);
