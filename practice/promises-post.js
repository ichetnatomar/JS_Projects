// Promises explained using a real-world analogy:

// Lets's say you are working as a Software Enginner at a company, and your boss asks you to write a program in next 2 days.
// You already have a lot of pending work, but you can't say no to him(boss is very strict).
// So you make him a Promise, telling him that you will try your best to deliver the code within 2 days, if not, you will inform him.

let promise = new Promise(function (resolve, reject) { //you are this executor function here.

  const isCodeWritten = (Math.random() > 0.5); //chances of you completeing code is 50-50. Math.random returns randome valuse between 0 and 1.

  if (isCodeWritten) {
    resolve('code is completed, boss is happy!');
  }
  else {
    reject('code not completed, need more time.');
  }
});

promise.then(function (message) {
  console.log(message);
});

promise.catch(function (err) {
  console.log(err);
})

promise.finally(function () {
  console.log('Promise executed.');
})

