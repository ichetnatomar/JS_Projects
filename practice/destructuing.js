//destructuring is a way of unpacking values from arrys or objects
//Destructing in arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); //1
console.log(second); //2
console.log(rest); //[3,4,5]


// let arr = [1, "hello", { name: 'John', age: 20 }];
// const [number, string, object] = arr;
// console.log(number); //1
// console.log(string); //hello
// console.log(object); // { name: 'John', age: 20 }


//Destructuring in Objects
const Person = {
  name: "John",
  age: 20,
  hobbies: {
    indoor: "ludo",
    outdoor: "badminton",
  },
};
const { name, age, hobbies: { indoor, outdoor }, } = Person;
console.log(name); //John
console.log(age); //20
console.log(indoor); 



// const person = {
//   name: "Alice",
//   age: 25,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// // Destructuring assignment with nested objects
// const {
//   name,
//   age,
//   address: { city, country },
// } = person;

// console.log(name); // Output: Alice
// console.log(age); // Output: 25
// console.log(city); // Output: New York
// console.log(country); // Output: USA
