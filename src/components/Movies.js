import React from 'react';
import { movies } from '../data';

const Movies = () => {


let moviesObj = movies.map( movie => <h3>Name: {movie.title} <br></br> Time: {movie.time}<br></br></h3> )
let moviesGenres = movies.map ( movies => (movies.genres.map( genre => <li>{genre}</li>)))



let zip = moviesObj.map(function(movieName, i) {
  return <div>{[movieName, moviesGenres[i]]}</div>
})


  return (
    <div>
        <h1>Movies Pages</h1>
        {zip}
    </div>
  );
};

export default Movies;
