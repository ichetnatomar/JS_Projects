const buttonElement = document.querySelector('#btn'); //button element

const throttledClick = throttle(handleClick, 6000); //create a throttles version of handleclick() with a delay of 6s.

function handleClick() {  //handleClick function for when button gets clicked.
  console.log('Button clicked');
}


//Throttle function: ensures that button callback(ie. handleClick) gets executed only once button is clicked 
function throttle(handleClick, interval) {
  let canRun = true;

  return function () { //closure is returned to throttledClick

    if (canRun) { //boolean value to indicate that button can be pressed.
      handleClick(); //execute callback
      canRun = false; //once the callbakc is executed, make it false again for next 6s
      setTimeout(() => {
        canRun = true; //after 6s is over, make button clickable again
      }, interval);
    }

  };
}

//Evwent listener attached to click event of the button element
buttonElement.addEventListener('click', throttledClick);


//Throttling: in thius example a button can be pressed only once, then it becomes dormant for a given time interval., after that it again becomes clickable. 
// App optimization and clearer UI.
