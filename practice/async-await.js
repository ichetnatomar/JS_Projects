let promise = new Promise(
  function (resolve, reject) {
    setTimeout(() => resolve('Promise resolved.'), 15000);
    setTimeout(() => reject('promise rejected.'), 15000);
  });


//1st way of resolving a promise: using then()
function resolvePromise() {
  promise.then(function (message) { //this method does not wait for the promise to be fulfilled. it continues with rest of code meanwhile promise it being fulfilled whenever.
    console.log(message);
  });
  console.log('scaler');
}

// resolvePromise();

//2nd way of resolving a promise: using async await
async function handlePromise() {
  let message = await promise; //this method awaits for promise to be fulfilled, then only it prints rest of the things.
  console.log(message);
  console.log('scaler')

}
handlePromise();





console.log('start');

setTimeout(() => { console.log('settimeout callback') }, 1000);

function createPromise() {
  console.log('createPromise fn called');
  return new Promise((resolve, reject) => {
    console.log('Inside promise executor fn');
    setTimeout(
      () => {
        resolve('promise fulfilled')
      }
      , 1000);
  });
}

async function fulfilPromise() {
  console.log('fulfilPromise fn called');
  const data = await createPromise();
  console.log(data);
  console.log('after createPromisefn called');
}

fulfilPromise();
console.log('end');

