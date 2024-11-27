
const modalWindowElement = document.querySelector('.modal-cont');
const removeBtn = document.querySelector('.trash-btn');
const addBtn = document.querySelector('.add-btn');
let isModalOn = false;
const textElement = document.querySelector('.text-area');
const mainContainerElement = document.querySelector('.main-cont');
const priorityColorElements = document.querySelectorAll('.priority-color');
let ticketColorClass = 'filter-color-1';








//generate a ticket
function createTicket() {

  const ticketElement = document.createElement('div');
  ticketElement.classList.add('ticket-cont');

  ticketElement.innerHTML = `  
    <div class="ticket-header"></div>
      <div class="ticket-title"></div>
      <div class="ticket-description">
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>
      </div>
   `;

  mainContainerElement.appendChild(ticketElement);

  //populating info into the ticket
  const ticketTitleElement = ticketElement.querySelector('.ticket-title');
  ticketTitleElement.innerText = (Math.random() * 10000).toFixed(0);

  //populate ticket's descrption with modal windows' text area content
  ticketElement.querySelector('.ticket-description').innerText = modalWindowElement.querySelector('.text-area').value;


  ticketElement.querySelector('.ticket-header').classList.add(ticketColorClass);

  console.log(ticketElement.querySelector('.ticket-header').classList);

  ticketColorClass = 'filter-color-1';

  //remove modal pop-up window once its corresponding ticket is generated
  removeModalPopup();
}








function removeModalPopup() {
  modalWindowElement.style.display = 'none';
  isModalOn = false;
}








//on clicking the plus button, pop-up a modal window
addBtn.addEventListener('click', function () {

  if (isModalOn) {     //if modal window is already there, then remove it, and make flag false
    modalWindowElement.style.display = 'none';
    isModalOn = false;

  }
  else {               //if modal window is not there, then pop it up, and make flag true
    modalWindowElement.style.display = 'flex';
    textElement.innerText = "";
    isModalOn = true;
  }


});








//write tasks 
modalWindowElement.addEventListener('keydown', function (e) {
  const key = e.key;
  if (key == 'Shift') {
    //call a function that creates a fresh ticket for each task
    createTicket();
  }
});







//on clicking color, show highlight
//Using querSelectorAll
priorityColorElements.forEach((priorityColorElement) => {

  priorityColorElement.addEventListener('click', () => {

    priorityColorElements.forEach((colorElement) => {
      colorElement.classList.remove('chosen-color-border');
    });

    priorityColorElement.classList.add('chosen-color-border');

    //once color is chosen, save it for ticket's header
    // ticketColor = (window.getComputedStyle(priorityColorElement).backgroundColor);



    //another way of accessing color, extract color class for element,
    priorityColorElement.classList.forEach(priorityColorElementClass => {
      if (priorityColorElementClass.match('filter-color')) {
        ticketColorClass = priorityColorElementClass;
      }
    });

    console.log(ticketColorClass);

  });
});


//doing above this using event delegation method, instead of forEach

// document.addEventListener('click', function (e) {
//   if (e.target.matches('.priority-color')
//   ) {
//     //first remove any chosen-color-border class from any buttons if present
//     document.querySelectorAll('.chosen-color-border').forEach(element => {
//       element.classList.remove('chosen-color-border');
//     });
//     e.target.classList.add('chosen-color-border');
//   }
// });


