// let myInterval;

// function startInterval(callback, timeInterval) {
//   myInterval = setInterval(callback, timeInterval);
// }

// function callback () {
//   console.log("this is a callback function.");
// }

// function stopInterval () {
//   clearInterval(myInterval);
//   console.log("interval stopped.");
// }

// startInterval(callback, 1000);
// setTimeout(stopInterval, 5000);



let intervalId;
        
function periodicPrinter(callback, timeInterval) {
    intervalId = setInterval(callback, timeInterval);
}

function callback(){
    console.log("this is a callback function");
}

function stopInterval(){
    clearInterval(intervalId);
    console.log('Stopped.');
}

periodicPrinter(callback, 1000);
setTimeout(stopInterval, 5000);







// let intervalId;

// // Start the interval
// function startInterval() {
//   intervalId = setInterval(callback, 1000); // Call the callback every 1 second
// }

// function callback() {
//   console.log('Callback function called');
// }

// // Stop the interval after 5 seconds
// function stopInterval() {
//   clearInterval(intervalId);
//   console.log('Interval stopped');
// }

// // Start the interval, then stop it after 5 seconds
// startInterval();
// setTimeout(stopInterval, 5000);


