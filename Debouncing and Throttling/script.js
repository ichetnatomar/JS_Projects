//generic debounce function that debounces a callback for given delay
function debounce(callback, delay) {

  let timerId;

  return function (query) {
    clearTimeout(timerId); //derlete old timer
    timerId = setTimeout(() => { //start new timer, if it crosses the given delay(2s here), fire the callback!!
      callback(query);
    }, delay);
  };

}

//searchAPI callback
function searchAPI(query) {
  console.log('API hit to search for: ', query);
}

//mapping generice debounce() with specific searchAPI callback and delay
let debouncSearchAPI = debounce(searchAPI, 2000);


const searchElement = document.querySelector('#search-bar');

searchElement.addEventListener('input', (e) => {
  const query = e.target.value;
  debouncSearchAPI(query);
});