import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
          <div><ul>
            <li>
                {movie.title}
            </li>
            <li>{movie.time}</li>
           {movie.genres.map(genre=><ul>{genre}</ul>)}</ul>
            </div>)
        })}
    </div>
  );
};

export default Movies;
