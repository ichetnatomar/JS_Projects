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