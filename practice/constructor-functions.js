class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

const p1 = new Person('John', 10);
const p2 = new Person('Jerry', 20);

console.log(p1);
console.log(p2);

//Constructor Functions
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

PersonConstructor.prototype.getDetails = function () {
  console.log(`Hi, I am ${this.name}, my age is ${this.age}`);
}

console.dir(PersonConstructor);

const p3 = new PersonConstructor('Tom', 21);
const p4 = new PersonConstructor('Mark', 22);

p3.getDetails();





// read:
// Using a **constructor function** over a **class** in JavaScript has certain advantages, but it's important to note that `class` is essentially syntactic sugar over constructor functions and prototypes. Here's a breakdown of when and why you might prefer constructor functions over classes:

// ### Advantages of Constructor Functions
// 1. **Familiarity in Older Environments**:
//    - Before ES6 introduced `class`, constructor functions were the primary way to create reusable object templates.
//    - Older JavaScript developers or legacy codebases may rely on constructor functions for compatibility with pre-ES6 environments.

// 2. **Better Understanding of Prototypes**:
//    - Constructor functions explicitly show how prototypes work because you have to manually add methods to `MyConstructor.prototype` to share them among instances.
//    - Using them helps in understanding JavaScript's prototypal inheritance, which is sometimes abstracted away by `class`.

// 3. **No Transpilation Required**:
//    - In environments that don’t support ES6 (or when transpilers like Babel aren’t used), constructor functions are natively supported.
//    - Classes require transpilation for ES5 compatibility, which could introduce performance overhead or complications.

// 4. **Flexibility in Custom Behavior**:
//    - Constructor functions allow greater freedom to deviate from the class-like paradigm. For instance, you can return any object (even unrelated ones) from a constructor function, which is harder with a `class`.

// 5. **No Implicit `strict mode`**:
//    - Classes in JavaScript automatically operate in `strict mode`. If you prefer not to enforce strict mode for some reason, constructor functions can be used to bypass this.

// 6. **Dynamic Creation**:
//    - Constructor functions allow you to dynamically define constructors at runtime using `Function` constructors or other runtime approaches. This is less straightforward with `class`.

// ---

// ### When to Use `class` Instead
// - **Readability**: `class` syntax is cleaner and more intuitive for many developers, especially those coming from other object-oriented languages.
// - **Modern Features**: Classes support modern features like inheritance (`extends`), `super` calls, static methods, private fields (`#`), and more.
// - **Tooling and Debugging**: Many modern tools (e.g., linters, debuggers) are optimized for class syntax, offering better error messages and support.

// ### Conclusion
// Use constructor functions if you’re working in older environments, need flexibility, or want to deeply understand prototypes. However, for most modern use cases, `class` provides cleaner syntax and is more aligned with contemporary JavaScript development practices.

