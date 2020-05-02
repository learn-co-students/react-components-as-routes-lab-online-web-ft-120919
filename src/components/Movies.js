import React from "react";
import { movies } from "../data";

const MoviesDiv = () =>
 { movies.map((movie, index) => (
    <div>
      <h4>Name: {movie.title}</h4>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ))};

const Movies = () => {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map((movie, index) => (
    <div>
      <h4>Name: {movie.title}</h4>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ))}
    </div>
  );
};

export default Movies;
