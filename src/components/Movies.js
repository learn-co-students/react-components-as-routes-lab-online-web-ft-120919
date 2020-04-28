import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
		{movies.map((movie, index) => {
			return (
				<div key={`movie-${index}`}>
					<h3>{movie.title}</h3>
					<p>Runtime: {movie.time}</p>
					<ul>
					{movie.genres.map((genre, gIndex) => {
						return <li key={`genre-${gIndex}`}>{genre}</li>
					})}
					</ul>
				</div>
			)
		})}
    </div>
  );
};

export default Movies;
