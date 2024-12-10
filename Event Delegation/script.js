const buttonElements = document.querySelectorAll('button');
const buttonContainer = document.querySelector('#button-cont');

//ForEach Loop
// buttonElements.forEach((buttonEle) => {
//   buttonEle.addEventListener('click', () => {
//     console.log(`${buttonEle.innerText} got clicked`);
//   })  
// })


//Using Event Delegation
buttonContainer.addEventListener('click', (e) => {
  console.log(`${e.target.innerText} got clicked`);
})
