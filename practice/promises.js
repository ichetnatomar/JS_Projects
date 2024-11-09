let promise = new Promise(function (resolve, reject) {
  //executor,which is the singer according to analogy, that delivers either song or error sooner or later, on the basis of which respective callbacks are summoned.
  const isSongDone = (Math.random() > 0.5); //0-0.5:false or song not wriiten, 0.51-1:true, song completed

  if (isSongDone) {
    promise.reolve(isSongDone);
  }
  else{
    promise.reject(isSongDone);
  }
});