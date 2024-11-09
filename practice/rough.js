//read a file using promises

const fs = require('fs');
const fileData = fs.promises.readFile('file1.txt'); //promise will either resolve (returning file content), or it returns an error(returinign error message.)

// fileData.then(function (data) {
//   console.log(`${data}`);
// }).catch(function (err) {
//   console.log(err);
// }
// );


const promiseReadFile1 = fs.promises.readFile('file1.txt');
const promiseReadFile2 = fs.promises.readFile('file2.txt');
const promiseReadFile3 = fs.promises.readFile('file3.txt');

//Files will be printed in RANDOM Order 

promiseReadFile1.then((data) => {
  console.log('file 1 data:-' + data);
}).catch(function (err) {
  console.log(`error message: ${err}`);
});

promiseReadFile2.then((function (data) {
  console.log('file 2 data:- ' + data);
})).catch(function (err) {
  console.log('error message:- ' + err);
});

promiseReadFile3.then(function (data) {
  console.log(`file 3 details:- ${data}`);
}).catch(
  function (err) {
    console.log(`error: ${err}`);
  }
);

//Files will be printed in Serial Order using CHAINING.

// promiseReadFile1.then(function (data1) {
//   console.log(`file 1 details:- ${data1}`);
//   promiseReadFile2.then(function (data2) {
//     console.log(`file 2 details:- ${data2}`);
//     promiseReadFile3.then(function (data3) {
//       console.log(`file 3 details:- ${data3}`);
//     })
//   })
// }
// )


promiseReadFile1.then(function (data1) {
  console.log(`file 1 details:- ${data1}`);
  return promiseReadFile2;
}).then(function (data2) {
  console.log(`file 2 details:- ${data2}`);
  return promiseReadFile3;
}).then(function (data3) {
  console.log(`file 3 details: ${data3}`);
})