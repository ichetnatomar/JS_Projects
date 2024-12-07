const arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, curr) => accumulator + curr, 0);
console.log(sum);

const items = [
  {
    name: 'pen',
    price: 10,
  },
  {
    name: 'pencil',
    price: 20,
  },
  {
    name: 'bag',
    price: 30,
  }
];

sum = items.reduce((accumulator, currItem) => accumulator + currItem.price, 0);
console.log(sum);
