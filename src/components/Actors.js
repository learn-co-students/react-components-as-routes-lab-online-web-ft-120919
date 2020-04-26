import React from 'react';
import { actors } from '../data';

let actorObj = actors.map( actor => <h3>Name: {actor.name} </h3>)
let actorMovies = actors.map ( actor => (actor.movies.map( movie => <li>{movie}</li>)))
//                 movies.map ( movies => (movies.genres.map( genre => (genre)) ))
let zip = actorObj.map(function(e, i) {
  return <div>{[e, actorMovies[i]]}</div>
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Pages</h1>
      {zip}
    </div>
  );
};

export default Actors;
