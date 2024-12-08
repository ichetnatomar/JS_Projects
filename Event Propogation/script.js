const childElement = document.querySelector('.child');
const parentElement = document.querySelector('.parent');
const grandParentElement = document.querySelector('.grandparent');

//How to stop Event Propogation incase of Event Trickling/capturing?
//On clicking child, you want grandparent and parent event to be tricggered, but not child's.
// Add stopPrpogation() at the parent.


//Grandparent and Child
// grandParentElement.addEventListener('click', () => console.log('grand parent clicked'), true); //gets executed

// //add stopPropogation() here
// parentElement.addEventListener('click', (e) => {   //gets executed but then event stops trickling downwards
//   console.log('parent clicked');
// }, false
// );

// childElement.addEventListener('click', (e) => {
//   console.log('child clicked');
//   e.stopPropagation();
// }, true);

//Child and Grandparent is NOT POSSIBLE
grandParentElement.addEventListener('click', () => {
  console.log('grandparent clicked');
}, false);

parentElement.addEventListener('click', () => {
  console.log('parent clicked');
}, false);

childElement.addEventListener('click', () => {//target
  console.log('child clicked');

}, true);
