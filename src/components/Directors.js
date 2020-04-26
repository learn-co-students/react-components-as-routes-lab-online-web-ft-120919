import React from 'react';
import { directors } from '../data';


const Directors = () => {
  // directors.forEach( dir => (dir.movies.forEach( movie => console.log(movie))))
  // <p>{director.genres.map( genre => <li>{genre}</li>)}</p>
  // )
// let directorsObj = directors.map( director => <h3>Name: {director.name}</h3> )
// let directorsObj = directors.map( director => {director.name, director.movies.map(movie => <li>{movie}</li>)} )
let directorsObj = directors.map( director => <h3>Name: {director.name}</h3>)
let directorsMoviesObj =  directors.map( director => (director.movies.map( movie => <li>{movie}</li>)))

let zip = directorsObj.map(function(dirName, i) {
  return <div>{[dirName, directorsMoviesObj[i]]}</div>
})
// var c = a.map(function(e, i) {
//   return [e, b[i]];
// });

// let directorMoviesObj = directors.map (dir => (dir.movies.map( movie => <li>{movie}</li> )))
// const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]])


   
  return (
      
    
    <div>
    <h1>Directors Page</h1>
      {zip}
      </div>
  );
}

export default Directors
