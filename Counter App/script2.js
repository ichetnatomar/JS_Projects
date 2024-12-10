//on clicking the plus button, it should increment value by 1

const addBtnElement = document.querySelector('#add');

const countElement = document.querySelector('#number');

const resetBtn = document.querySelector('#reset');

const subtractBtnElement = document.querySelector('#subtract');

let incElement = document.querySelector('#increment');

let currCountValue = Number(countElement.innerText);



addBtnElement.addEventListener('click', () => {

  currCountValue = currCountValue + Number(incElement.value);

  countElement.innerText = String(currCountValue);

});


subtractBtnElement.addEventListener('click', () => {

  currCountValue = currCountValue - Number(incElement.value);

  countElement.innerHTML = String(currCountValue);

})

resetBtn.addEventListener('click', () => {
  
  countElement.innerText = '0';
})



