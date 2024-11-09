const fs = require('fs'); //module fs is needed to interact with file system


//async
const file2Data = fs.readFile('file2.txt', (err, file2Data) => {
  if(err){
    console.log(err);
  }
  console.log(`file 2 details:- ${file2Data}`);
});

//sync
const file1Data = fs.readFileSync('file1.txt');
const file3Data = fs.readFileSync('file3.txt');
console.log('start');
console.log(`file 1 details:- ${file1Data}`);
console.log(`file 3 details:- ${file3Data}`);
console.log('end');






