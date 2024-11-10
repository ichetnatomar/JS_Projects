function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink == 'coffee') {
      resolve(`Order for ${drink} placed.`);
    }
    else {
      reject(`Sorry, we dont' serve ${drink}.`);
    }
  });
}

function serveCoffee() {
  return new Promise(function (resolve) {
    resolve('Coffee served.');
  });
}

function makePayment() {
  return new Promise(function (resolve, reject) {
    resolve(`payment done. Thank you.`);
  });
}

//Placing order using Traditional Promise Chaining
// placeOrder('coffee').then(function (message) {
//   console.log(message);
//   return serveCoffee();
// }).then(function (message2) {
//   console.log(message2);
//   return makePayment();
// }).then(function (message3) {
//   console.log(message3);
// });


//Placing Order using Async-Await
async function coffeeOrder() {
  let isOrderPlaced = await placeOrder('coffee');
  console.log(isOrderPlaced);
  let isCoffeeServed = await serveCoffee();
  console.log(isCoffeeServed);
  let isPaymentDone = await makePayment();
  console.log(isPaymentDone);
}
coffeeOrder();



