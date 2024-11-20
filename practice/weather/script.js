console.log('hello');

const toys = {

  toy1: {
    name: 'tofu',
    type: 'stuff',
    price: 300,
  },
  toy2: {
    name: 'bunny',
    type: 'stuff',
    price: 500,
  },
};

const toysJson = JSON.stringify(toys);
const toysBackToObj = JSON.parse(toysJson);

console.log("toys obj: "+toys);
console.log("toys json: "+toysJson);
console.log("toys back to object from json:"+toysBackToObj);
