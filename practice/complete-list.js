document.addEventListener('DOMContentLoaded', () => {

  const fixBtn = document.getElementById('fix');

  fixBtn.addEventListener('click', function () {

    const allLi = document.querySelectorAll('li');

    const sixthElement = allLi[6];

    const seventhElement = document.createElement('li');

    seventhElement.innerText = '7';

    const list = document.getElementById('list');
    
    list.insertBefore(seventhElement, sixthElement);
    
  });

});
