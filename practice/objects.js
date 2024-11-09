function delay(ms) {
  return new Promise(function(resolve, reject){
    setTimeout(()=>resolve(), ms);
    reolve => {
      setTimeout(reolve, ms);
    }
  });
}

delay(3000).then(() => console.log('runs after 3 seconds'));