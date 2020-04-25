import React from 'react';
import { actors } from '../data';

let actorObj = actors.map( movie => <div><h3>Name: {movie.title} </h3><br></br> Time: {movie.time} <br></br></div>)
let moviesGenres = movies.map ( movies => (movies.genres.map( genre => <li>{genre}</li>)))
//                 movies.map ( movies => (movies.genres.map( genre => (genre)) ))
let zip = moviesObj.map(function(e, i) {
  return [e, moviesGenres[i]]
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Pages</h1>
    </div>
  );
};

export default Actors;
