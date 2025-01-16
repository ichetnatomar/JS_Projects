let str = "hello world";
let temp1 = str.replace("hello", "Namaste");
console.log("str-->", str);
console.log("temp1-->", temp1);
let temp2 = 'SCALE';
temp2 = temp2.toUpperCase();
console.log("temp2-->",temp2)



sayHi(); //referenceError 

let sayHi = function(){
  console.log('hi');
}

sayHi();