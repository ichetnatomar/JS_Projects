const fs = require('fs'); //fs module is used to interacting with file system.

fs.readFile('./file4.txt', cb);

function cb(err, data){
  if(err){
    console.log(err);
  }
  console.log(data);
}

// const file1Data = fs.readFileSync('./file1.txt');
// const file2Data = fs.readFileSync('./file2.txt');
// const file3Data = fs.readFileSync('./file3.txt');

// console.log('start');

// setTimeout(() => {
//   console.log(`file 1 details:- ${file1Data}`);
// }, 1000);

// setTimeout(()=>{
//   console.log(`file 2 details:- ${file2Data}`);
// }, 1000);

// setTimeout(()=>{
//   console.log(`file 3 details:- ${file3Data}`);
// }, 1000);

// console.log('end');




 