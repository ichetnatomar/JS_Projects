const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css';
document.head.appendChild(link);

const modalWindowElement = document.querySelector('.modal-cont');
const removeBtn = document.querySelector('.trash-btn');
const addBtn = document.querySelector('.add-btn');
const textElement = document.querySelector('.text-area');
const mainContainerElement = document.querySelector('.main-cont');
const priorityColorElements = document.querySelectorAll('.priority-color');
const trashIconElement = document.querySelector('.fa-solid, .fa-trash');
const toolboxColors = document.querySelectorAll('.toolbox-filter-color');
let localStorage = [];

//this array is used to change ticket's color when its color band gets clicked
const toolboxColorArray = ['filter-color-1', 'filter-color-2', 'filter-color-3', 'filter-color-4'];

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
      <div class="ticket-description"></div>
      <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
      </div>      
   `;

  const ticketDescriptionElement = ticketElement.querySelector('.ticket-description');
  const lockElement = ticketElement.querySelector('.ticket-lock').parentElement;

  mainContainerElement.appendChild(ticketElement);

  //populating info into the ticket
  const ticketTitleElement = ticketElement.querySelector('.ticket-title');
  ticketTitleElement.innerText = (Math.random() * 10000).toFixed(0);

  //populate ticket's descrption with modal windows' text area content
  ticketElement.querySelector('.ticket-description').innerText = modalWindowElement.querySelector('.text-area').value;
  ticketElement.querySelector('.ticket-header').classList.add(ticketColorClass);
  ticketColorClass = 'filter-color-1'; //setting back to default value

  //after a ticket is created and populated, add it to localStorage.
  handleLocalStorage(ticketElement);

  removeModalPopup();                       //remove modal pop-up window once its corresponding ticket is generated

  handleColor(ticketElement);               //when a ticket is created, a handlecolor() function is binded to it.

  // handleLock(ticketElement);

  handleLock2(ticketElement);

  deleteTicket(ticketElement);              //delete ticket when trash button is activated, and that ticket is clicked 

}

function handleLocalStorage(ticketElement) {
  const color = ticketElement.querySelector('.ticket-header').classList[1];
  const id = ticketElement.querySelector('.ticket-title');
  const task = ticketElement.querySelector('.ticket-description');
  localStorage.push({color, id, task});

  //Set local storage
  // local

  
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
document.addEventListener('keydown', function (e) {
  if (e.key == 'Shift' && isModalOn) {
    //call a function that creates a fresh ticket for each task
    createTicket();
  }
});




//on clicking color, show highlight
//Using querySelectorAll
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
  if (isTrashOn) {
    trashIconElement.style.color = 'black'; //change trash color to black
    trashElement.style.backgroundColor = '#FA0533'; //change bg color to red

    alert("Delete button has been activated.");
    const allTickets = document.querySelectorAll('.ticket-cont');
    allTickets.forEach(ticket => {
      ticket.style.cursor = 'pointer';
    })
  }
  else {
    trashIconElement.style.color = 'azure';
    trashElement.style.backgroundColor = 'rgb(6, 255, 89)';
  }
});




//delete a ticket
function deleteTicket(ticketElement) {
  ticketElement.addEventListener('click', () => {
    if (isTrashOn) {
      ticketElement.remove();
    }
  })
}


// document.addEventListener('click', (e) => {
//   if (isTrashOn) {
//     e.target.parentElement.classList.forEach(parentClass => {
//       if (parentClass.match('ticket-cont')) {
//         e.target.parentElement.remove();
//       }
//     })
//   }
// });




//on double-clicking any toolbox color, all tickets are displayed
toolboxColors.forEach(toolboxColor => {
  toolboxColor.addEventListener('dblclick', () => {
    const allTicketsElements = document.querySelectorAll('.ticket-cont');
    allTicketsElements.forEach(ticketEle => {
      ticketEle.style.display = 'block';
    })
  })
})




//select a toolbox color and filter all tickets of that color
toolboxColors.forEach(toolboxColor => {
  toolboxColor.addEventListener('click', () => {
    toolboxColorClass = toolboxColor.classList[1];
    let allTicketsElements = document.querySelectorAll('.ticket-cont');

    //for each ticket check, if its header class has chose color
    allTicketsElements.forEach(ticket => {
      if (ticket.children[0].classList.contains(toolboxColorClass)) {
        ticket.style.display = 'block';
      }
      else {
        ticket.style.display = 'none';
      }
    })
  })
})




function handleColor(ticketElement) {
  const ticketHeaderElement = ticketElement.querySelector('.ticket-header');

  //when this ticket header is clicked, its color is changed to next color
  ticketHeaderElement.addEventListener('click', () => {
    const ticketHeaderColor = ticketHeaderElement.classList[1]; //ticket color
    let ticketHeaderColorIndex = -1;
    //check ticket color lies in which index of toolboxColorArray
    for (let i = 0; i < toolboxColorArray.length; i++) {
      if (toolboxColorArray[i] == ticketHeaderColor) {
        ticketHeaderColorIndex = i;
        break;
      }
    }

    for (let i = 0; i < toolboxColorArray.length; i++) {
      if (i == ticketHeaderColorIndex) {
        ticketHeaderColorIndex = (ticketHeaderColorIndex + 1) % (toolboxColorArray.length);
        ticketHeaderElement.classList.remove(ticketHeaderColor);
        ticketHeaderElement.classList.add(toolboxColorArray[ticketHeaderColorIndex]);
        break;
      }
    }

  })
}




//on clicking the lock, it opens, and closes toggle.
function handleLock(ticketElement) {
  const lockElement = ticketElement.querySelector('.ticket-lock');
  const lockIconElement = lockElement.querySelector('.fa-lock');
  let isLockToOpen = false;
  lockElement.addEventListener('click', () => {
    isLockToOpen = !isLockToOpen;
    if (isLockToOpen) {
      //lock should open
      lockIconElement.classList.remove('fa-lock');
      lockIconElement.classList.add('fa-lock-open');
    }
    else {
      //lock should close
      lockIconElement.classList.remove('fa-lock-open');
      lockIconElement.classList.add('fa-lock');
    }
  })
}

//doing handle lock WITHOUT Flag
function handleLock2(ticketElement) {
  const lockElement = ticketElement.querySelector('.ticket-lock');
  const lockElem = lockElement.childNodes[1];
  lockElem.addEventListener('click', () => {
    if (lockElem.classList.contains('fa-lock')) {
      lockElem.classList.remove(lockElem.classList[1]);
      lockElem.classList.add('fa-lock-open');
    }
    else {
      lockElem.classList.remove(lockElem.classList[1]);
      lockElem.classList.add('fa-lock');
    }
  })
}