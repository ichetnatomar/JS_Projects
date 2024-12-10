const colorsElement = document.querySelector('#color-cont');
const bodyElement = document.querySelector('body');

colorsElement.addEventListener('click', (e) => {

  const color = e.target.id;
  e.target.parentElement.children[0].style.backgroundColor = color;
  e.target.parentElement.children[1].style.backgroundColor = color;
  e.target.parentElement.children[2].style.backgroundColor = color;
  bodyElement.style.backgroundColor = color;

})

