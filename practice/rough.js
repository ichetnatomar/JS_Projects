let ansArray = [];
const fs = require('fs');

function fetchByPromise(fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`content : ${fileName}`);
    }, 100 * Math.random());
  });
}

function fetchByPromise(fileName) {
  const fileData = fs.promises.readFile(fileName);
  return fileData;
}

async function twoSeries(file1, file2, ansArray) {
  fetchByPromise(file1).then(function (content1) {
    ansArray.push(content1);
    return fetchByPromise(file2);
  }).then(function (content2) {
    ansArray.push(content2);
  }).then(function () {
    ansArray.push('All files have been read.');
    console.log(ansArray);
  }).catch(function (err) {
    console.log('erro message:-' + err);
  })
}

twoSeries('./file1.txt', './file22.txt', ansArray);

