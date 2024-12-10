const categoriesElement = document.querySelector('#categories');

categoriesElement.addEventListener('click', (e) => {
  console.log(e.target.parentElement.querySelector('h1').innerText);
})
