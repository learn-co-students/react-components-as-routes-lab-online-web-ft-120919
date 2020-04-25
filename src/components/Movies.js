import React from 'react';
import { movies } from '../data';

const Movies = () => {

// let genres = movies.genres.map ( genre => genre)

let moviesObj = movies.map( movie => <div><h3>Name: {movie.title} </h3><br></br> Time: {movie.time} <br></br></div>)
let moviesGenres = movies.map ( movies => (movies.genres.map( genre => <li>{genre}</li>)))
//                 movies.map ( movies => (movies.genres.map( genre => (genre)) ))
let zip = moviesObj.map(function(e, i) {
  return [e, moviesGenres[i]]
})

// var c = a.map(function(e, i) {
//   return [e, b[i]];
// });
  return (
    <div>
        <h1>Movies Pages</h1>
        {zip}
    </div>
  );
};

export default Movies;
