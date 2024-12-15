const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('input', () => {
  const itemSearched = searchBar.value;
  hitAPI(itemSearched);
})
function hitAPI(itemSearched) {
  console.log(`API call to ${itemSearched}`)
};




//for each letter entered a separate API call is made, this increases load  on the API, increases expenditure(incase API is paid), and degrades the app's overall performance.

// Solution: 
    // 1. DEBOUNCING: Ssetup a times that starts after uses pauses typing, if times is complete, assume user has provided final input, and then hit API. else if user restars typing beofre timer, reset timer and wait till user pauses next.


