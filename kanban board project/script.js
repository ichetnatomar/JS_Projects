
const modalWindowElement = document.querySelector('.modal-cont');
const removeBtn = document.querySelector('.trash-btn');
const addBtn = document.querySelector('.add-btn');
const textElement = document.querySelector('.text-area');
const mainContainerElement = document.querySelector('.main-cont');
const priorityColorElements = document.querySelectorAll('.priority-color');
const trashIconElement = document.querySelector('.fa-solid, .fa-trash');
const toolboxColors = document.querySelectorAll('.toolbox-filter-color');
let toolboxColorClass = null;


let isModalOn = false;
let ticketColorClass = 'filter-color-1';
let isTrashOn = false;


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

  ticketColorClass = 'filter-color-1'; //setting back the deafult value

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




//activate trash button

const trashElement = document.querySelector('.trash-btn');

trashElement.addEventListener('click', () => {

  isTrashOn = !isTrashOn;
  console.log(isTrashOn);

  if (isTrashOn) {
    trashIconElement.style.color = '#000000'; //change trash color to black
    trashElement.style.backgroundColor = '#FA0533'; //change bg color to red
    alert("Delete button has been activated.");
  }

  else {
    trashIconElement.style.color = "azure";
    trashElement.style.backgroundColor = 'rgb(57, 57, 57)';
  }

});



//delete a ticket
document.addEventListener('click', (e) => {
  if (isTrashOn) {
    e.target.parentElement.classList.forEach(parentClass => {
      if (parentClass.match('ticket-cont')) {
        // console.log('ticket caught!');
        e.target.parentElement.remove();
      }
    })
  }
});




//select a toolbox color and filter all tickets of that color
toolboxColors.forEach(toolboxColor => {
  toolboxColor.addEventListener('click', () => {
    toolboxColorClass = toolboxColor.classList[1];
    let allTicketsElements = document.querySelectorAll('.ticket-cont');
    
    //for each ticket check, if its header class has chose color
    allTicketsElements.forEach(ticket => {
      if (ticket.children[0].classList.contains(toolboxColorClass)) {
        ticket.style.display = 'flex';
      }
      else {
        ticket.style.display = 'none';
      }


    })
  })
})












