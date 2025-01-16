const makeCounter = function(initialValue = 0){
  return function(){

    console.log(`initialValue: ${initialValue}`);
    initialValue+=1;
  }
}

const counter = makeCounter();
counter(); //0 
counter(); //1
counter(); //2

