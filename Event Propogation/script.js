const childElement = document.querySelector('.child');
const parentElement = document.querySelector('.parent');
const grandParentElement = document.querySelector('.grandparent');
console.log('hi')

childElement.addEventListener('click', () => console.log('child clicked'), false);
parentElement.addEventListener('click', () => console.log('parent clicked'), false);
grandParentElement.addEventListener('click', () => console.log('grand parent clicked'), true);

// a few more practice exapmles
// childElement.addEventListener('click', () => console.log('child clicked'), true);
// parentElement.addEventListener('click', () => console.log('parent clicked'), false);
// grandParentElement.addEventListener('click', () => console.log('grand parent clicked'), true);


// childElement.addEventListener('click', () => console.log('child clicked'), false);
// parentElement.addEventListener('click', () => console.log('parent clicked'), false);
// grandParentElement.addEventListener('click', () => console.log('grand parent clicked'), true);


// childElement.addEventListener('click', () => console.log('child clicked'), false);
// parentElement.addEventListener('click', () => console.log('parent clicked'), true);
// grandParentElement.addEventListener('click', () => console.log('grand parent clicked'), true);


//event capturing or event trickling
// when capture parameter is set to true, and when a target is clicked, execution first moves upwards,
// towards the topmmost element with true, exectues it event , and then moves inwards, executing events(of elements that have capture:true), till it reaches the target, and finally exectues the target's even