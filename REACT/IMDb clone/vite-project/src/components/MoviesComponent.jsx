import React from 'react'
import Card from './Card.jsx'
import axios from 'axios'
import { useEffect } from 'react'

const MoviesComponent = () => {

  useEffect(() => {

    //function that returns a promise of axios.get
    function getMovieData() {
      return new Promise((resolve, reject) => {
        resolve(axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8ff6c22bd402e6ea6aa0e26ecce8b2f&language=en-US'));
        reject('Error on trying to fetch data. ');
      });
    }

    //async function that handles the promise returned by getMovieData
    async function handleMovieData() {
      try {
        const response = await getMovieData();
        console.log('response', response);
      }
      catch (error) { console.log(error) };
    }
    
    //call the handle mathod
    handleMovieData();

  });


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
export default MoviesComponent;