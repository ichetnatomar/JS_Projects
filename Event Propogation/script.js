const childElement = document.querySelector('.child');
const parentElement = document.querySelector('.parent');
const grandParentElement = document.querySelector('.grandparent');

//How to stop Event Propogation?
//On clicking child, you only want child and then parent 's event to be triggered, and STOP after that, not propogate it any further..
//Use event.stopPropogation() at the last stop.



childElement.addEventListener('click', () => console.log('child clicked'));

//add stopPropogation() here
parentElement.addEventListener('click', (e) => {
  console.log('parent clicked');
  e.stopPropagation();
}
);

grandParentElement.addEventListener('click', () => console.log('grand parent clicked'));