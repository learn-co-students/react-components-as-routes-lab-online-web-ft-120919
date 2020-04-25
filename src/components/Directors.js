import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // directors.forEach( dir => (dir.movies.forEach( movie => console.log(movie))))
  // <p>{director.genres.map( genre => <li>{genre}</li>)}</p>
  // )
// let directorsObj = directors.map( director => <h3>Name: {director.name}</h3> )
let directorsObj = directors.map( director => director.name)
// let directorsObj = directors.map( director => {director.name, director.movies.map(movie => <li>{movie}</li>)} )
let directorsMoviesObj =  directors.map( director => (director.movies.map( movies => (movies)) ))

let zip = directorsObj.map(function(e, i) {
  return <div>{[<h3>{e}</h3>, <li>{directorsMoviesObj[i]}</li>]}</div>
})
// var c = a.map(function(e, i) {
//   return [e, b[i]];
// });

// let directorMoviesObj = directors.map (dir => (dir.movies.map( movie => <li>{movie}</li> )))
// const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]])


   
  return (
    <div>
      <h1>Directors Page</h1>
      {/* {directorsObj}
      {directorsMoviesObj} */}
      {zip}
    </div>
  );
}

export default Directors
