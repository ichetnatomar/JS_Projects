
const modalWindowElement = document.querySelector('.modal-cont');
const removeBtn = document.querySelector('.trash-btn');
const addBtn = document.querySelector('.add-btn');
let isModalOn = false;



//on clicking the plus button, pop-up a modal window

addBtn.addEventListener('click', function () {
  console.log(isModalOn);
  if (isModalOn) {     //if modal window is already there, then remove it, and make flag false
    modalWindowElement.style.display = 'none';
    isModalOn = false;
  }
  else { //if modal window is not there, then pop it up, and make flag true
    modalWindowElement.style.display = 'flex';
    isModalOn = true;
  }

});

//on clickng the trash button, the tickets should get deleeted