// const searchBar = document.querySelector('#search-bar'); //SearchBar element
// let timerID;

// //API call function
// searchAPI = (itemToBeSearched) => {  
//   console.log(`Searching for ${itemToBeSearched}`); 
// }

// //Debounce function
// function debounce(itemToBeSearched, searchAPI, delay) {
//     clearTimeout(timerID); //clear out old timer

//     timerID = setTimeout(() => { //reset to a new fresh timer
//       searchAPI(itemToBeSearched); //if input is delayed by 3s, call searchAPI
//     }, delay);
// }

// //Event listener for the search bar
// searchBar.addEventListener('input', () => {
//     const itemToBeSearched = searchBar.value;
//     debounce(itemToBeSearched, searchAPI, 3000);  //search for itemToBeSearched  using searchAPI, debounce with a 3s delay. 
//   }
// );




//Using CLOSURE FUNCTION inside Debounce()

const searchBar = document.querySelector('#search-bar'); //SearchBar element



//API call function
searchAPI = (itemToBeSearched) => {
  console.log(`Searching for ${itemToBeSearched}`);
}

const debouncedAPI = debounce(searchAPI, 3000); //closure function is caught here in variable 
// console.log(debouncedAPI); 

//Debounce function
function debounce(searchAPI, delay) {

  let timerID; //initially it is undefined

  return function (e) {

    console.log('timer', timerID);

    clearTimeout(timerID);

    const query = e.target.value; //value to be searched 

    timerID = setTimeout(() => {
      searchAPI(query); //call searchAPI after delay
    }, delay);
  }

}


//Event listener for the search bar
searchBar.addEventListener('input', debouncedAPI); //search using searchAPI, debounce with a 3s delay.
