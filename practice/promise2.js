function writeSong() {
  return new Promise((resolve, reject) => {
    // resolve('song is written');
    setTimeout(() => { resolve('song is written') }, 2000);
    reject('song not done');
    // setTimeout(()=>{reject('song is nnot done!!')}, 2000);
  });
}

const isSongWritten = writeSong().then((result) => { console.log(result) }).catch((err) => { console.error(err) });
// console.log('result is : ',isSongWritten);

function weatherAPI() {
  return "weather is good.";
}

function getWeather() {
  return new Promise((resolve, reject) => {
    try {
      const weather = weatherAPI();
      resolve(weather);
    }
    catch (error) {
      reject(error);
    }
  });
}

//normal then() cathc() and finally(), AVOID it since this way of promise handling becomes complex with increased number of promises
// getWeather().then((data) => { console.log(data) }).catch((err) => { console.log(err) }).finally(() => { console.log('completed.') });

//g for this methos of asyn await for handling promises, it makes code readable and easy debuggable
async function getResult() {
  try {
    console.log('anything before await gets executed synchronously');
    const data = await getWeather();
    console.log('after await');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getResult();

console.log('Gets executed first!');

// O/P 
// anything before await gets executed synchronously'
// 'Gets executed first!');
// after await
// weather is good 
