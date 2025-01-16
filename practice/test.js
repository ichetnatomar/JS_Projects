// 'use strict';

function sayHello() {
  console.log(`${this} says hi`);
}

const car = {
  make: "Toyota",
  fn: function () {
    function f2() {
      console.log(`${this}`);
    }
    f2();
  }
};

car.fn();