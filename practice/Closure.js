const parent = () => {
  let x = 1;

  //child
  return function () {
    console.log(x);
    x = x + 1;
  }
}

let child = parent();
console.log(child);
child();
child();

function outer(value) {
  function inner() {
    value = value + 100;
    console.log(value);
  }
  return inner;
}

const innerFn = outer(100); //value = 100 function inner(){
// value = 100 + 100 = 200
// console.log(value); 200

innerFn();

const inner2 = outer(900);
inner2();


function doSomething() {
  var x = 10;
  function print() {
    console.log(x);
  }
  return print;
}

const fn = doSomething();
var x = 20;
fn();

function 