// //Promise Chaining:-

// // when you fulfil one promise, it fires up a chain reaction of some events.

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(
//   function (value) {
//     console.log(value);
//     return value * 2;
//   }
// ).then((value) => {
//   console.log(value);
//   return value * 2;
// }).then((value) => {
//   console.log(value);
//   return value * 2;
// });
// setTimeout(() => { console.log('********************************') }, 2000);

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promise fulfilled');
//     resolve(1)
//   }, 4000);
// }).then((message) => {
//   console.log('deal 1 done');
// }).then((message) => {
//   console.log('deal 2 done');
// }).then(() => {
//   console.log('deal 3 done');
// });

// setTimeout(() => { console.log('********************************') }, 6000);

// let promise3 = new Promise(function (resolve) {
//   setTimeout(() => resolve('room cleaned.'), 8000);
// }).then(function (message) {
//   console.log(message);
//   return "garbage cleared.";
// }).then(function (message) {
//   console.log(message);
//   return "bedsheet spread.";
// }).then(function (message) {
//   console.log(message);
// });

// let promise4 = new Promise(function (resolve) {
//   setTimeout(() => resolve('garvage removed.'), 10000);
// });

// let promise5 = new Promise(function (resolve) {
//   setTimeout(() => resolve('hence,  icecream won.'), 11000);
// });



let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    const isJobDone = (Math.random() > 0.5);
    if (isJobDone) {
      setTimeout(() => resolve('room cleaned'), 1000);
      // resolve('room cleaned');
    }
    else {
      setTimeout(() => reject('room not cleaned'), 1000);
      // reject('room not cleaned');
    }
  }
  );
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    const isJobDone = (Math.random() > 0.5);
    if (isJobDone) {
      setTimeout(() => resolve('garbage cleared.'), 1000);
      // resolve('garbage cleaned');
    }
    else {
      setTimeout(() => reject('garbage not cleared.'), 1000);
      // reject('garb not cleaned');
    }
  }
  );
};

let icecreamTreat = function (message) {
  return new Promise(function (resolve, reject) {
    
    resolve('then won icecream.');    
  }
  );
};



cleanRoom().then(function (message) {
  console.log(message);                             // result = room cleaned
  return removeGarbage(message);                    // removegarbage function called that returned a promise that was resolved in 12sec with     message ='garbageremoved'

}).then(function (message) {
  console.log(message)                             // meassge = 'garbage removed'
  return icecreamTreat(message);                   // this returns message = hence, I won icecream

}).then(function (message) {
  console.log('finished, ' + message);
}).catch(
  function(error){
    console.log(error);
  }
);








