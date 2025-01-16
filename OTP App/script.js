const textBtnElements = document.querySelectorAll('.text'); //array of all textareas
// console.log(typeof (textBtnElements));
// console.log(textBtnElements[2]);

let currTextIdx = -1;

//by default, cursor should be on the first text

// add an event to each textarea, if clicked add golden boorder-bottom, and remove from anywhere else
textBtnElements.forEach((textBtnElement) => {

  //check if current textBtnElement has autofocus on it 
  // if (textBtnElement.hasAttribute('autofocus') && textBtnElement.classList.contains('highlight')) {



    //enter digit 
    getInput(textBtnElement);
    currTextIdx = getIdx(textBtnElement);

    // and autofocus moves to next textarea

    textBtnElements[currTextIdx+1].focus();


  // }
})

//returns index of textarea from nodelist 
function getIdx(textBtnElement) {
  let idx = -1;
  for (let x = 0; x < textBtnElements.length; x++) {
    if (textBtnElement.id == textBtnElements[x].id) {
      idx = x;
      break;
    }
  }
  return idx;
}

function getInput(textBtnElement) {
  // console.log(textBtnElement);

  //the moment you press a digit key, the autofocusa and highlight moves immediately to next textarea
  textBtnElement.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {

      //capture its index from array
      currTextIdx = getIdx(textBtnElement);

      moveFocus(textBtnElement, currTextIdx);
      

    }
  });
}

function moveFocus(textBtnElement, currTextIdx) {
  //first remove autofocus 
  // console.log(textBtnElement);
  textBtnElement.classList.remove('highlight');
  textBtnElement.removeAttribute('autofocus');

  textBtnElements[currTextIdx + 1].classList.add('highlight');
  // textBtnElements[currTextIdx + 1].setAttribute('autofocus', '');
  
  // console.log(textBtnElements[currTextIdx + 1]);
}

