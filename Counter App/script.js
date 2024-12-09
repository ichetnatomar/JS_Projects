//on clicking the plus button, it should increment value by 1
const addBtnElement = document.querySelector('#add-btn');
let countElement = document.querySelector('#count');
const resetBtn = document.querySelector('#reset');
const subtractBtnElement = document.querySelector('#subtract-btn');



console.log(countElement.innerText);
addBtnElement.addEventListener('click', () => {

  let currCountValue = countElement.innerText;
  currCountValue++;
  countElement.innerText = currCountValue;

});


subtractBtnElement.addEventListener('click', () => {
  let currCountValue = countElement.innerText;
  console.log(currCountValue);
  currCountValue--;
  countElement.innerText = currCountValue;
})

resetBtn.addEventListener('click', () => {
  countElement.innerText = '0';
})


