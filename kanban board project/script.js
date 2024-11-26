
const modalWindowElement = document.querySelector('.modal-cont');
const removeBtn = document.querySelector('.trash-btn');
const addBtn = document.querySelector('.add-btn');
let isModalOn = false;
const textElement = document.querySelector('.text-area');
const mainContainerElement = document.querySelector('.main-cont');
let ticketIid = 0;


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

  //pouplating info into the ticket
  const ticketHeaderElement = ticketElement.querySelector('.ticket-header');
  ticketHeaderElement.innerText = ++ticketIid;

  //populate ticket's descrption with modal windows' text area content
  ticketElement.querySelector('.ticket-description').innerText = modalWindowElement.querySelector('.text-area').value;

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
})
