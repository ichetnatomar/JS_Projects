const allStars = document.querySelectorAll('.fa-star');
const ratingEle = document.querySelector('#userRatingCount');
const starContainerEle = document.querySelector('.star-cont');
let idx = -1;

starContainerEle.addEventListener('click', (e) => {
  // Get the index of the clicked star
  idx = Array.from(allStars).indexOf(e.target);

  // Update the stars based on the clicked index
  updateRating(idx);

  // Update the rating count display
  ratingEle.innerHTML = idx + 1;
});

function updateRating(idx) {
  // Loop through all stars to update their classes
  for (let x = 0; x < allStars.length; x++) {
    if (x <= idx) {
      // Highlight stars up to the selected index
      allStars[x].setAttribute('class', 'fa-solid fa-star yellow');
    } else {
      // Reset remaining stars to regular style
      allStars[x].setAttribute('class', 'fa-regular fa-star');
    }
  }
}
