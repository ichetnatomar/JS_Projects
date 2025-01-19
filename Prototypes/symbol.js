const person = {
  name: "John",
  [Symbol('id')]: 12345 //private-like property
};

//print all properties of person object
console.log(Object.keys(person)); //name , wont gve Symbol

console.log(Object.getOwnPropertySymbols(person)); //Symbol('id')

person[Symbol('id')] = 5678;
person[Symbol('id')] = 5678;
person[Symbol('id')] = 5678;
console.log(Object.getOwnPropertySymbols(person)); //Symbol('id') Symbol('id') Symbol('id') Symbol('id')

console.log(typeof Symbol);



// Key Points:
// - Symbols are primitive values
// - Each Symbol is unique (unless global)
// - Often used for creating "hidden" properties
// - Great for avoiding naming collisions
// - Can't be automatically converted to string










// 1. Basic Usage:
```javascript
// Creating Symbols
const sym1 = Symbol();
const sym2 = Symbol('description');  // Optional description

// Each Symbol is unique
const sym3 = Symbol('hello');
const sym4 = Symbol('hello');
console.log(sym3 === sym4);  // false - even with same description
```

// 2. Common Uses:
```javascript
// 1. Hidden object properties
const obj = {
    name: "John",
    [Symbol('id')]: 12345  // Private-like property
};
console.log(obj.name);      // "John"
console.log(Object.keys(obj)); // ["name"] - Symbol not visible!

// 2. Avoiding name collisions
const CLICK_EVENT = Symbol('click');
const CLICK_EVENT2 = Symbol('click');
// Both can exist without conflict
```

// 3. Accessing Symbol Properties:
```javascript
const id = Symbol('id');
const user = {
    name: "John",
    [id]: 123
};

// How to access
console.log(user[id]);  // 123
console.log(Object.getOwnPropertySymbols(user));  // [Symbol(id)]
```

// 4. Global Symbols:
```javascript
// Create/retrieve global Symbol
const globalSym = Symbol.for('myGlobalSymbol');
const sameGlobalSym = Symbol.for('myGlobalSymbol');
console.log(globalSym === sameGlobalSym);  // true

// Get key of global Symbol
console.log(Symbol.keyFor(globalSym));  // 'myGlobalSymbol'
```

