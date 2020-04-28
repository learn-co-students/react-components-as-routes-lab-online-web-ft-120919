import React from 'react';
import { directors } from '../data';

const Directors = () => {
	return (
		<div>
			<h1>Directors Page</h1>
			{directors.map((director, index) => {
				return (
					<div key={`director-${index}`}>
						<h3>{director.name}</h3>
						<ul>
							{director.movies.map((movie, mIndex) => {
								return <li key={`movie-${mIndex}`}>{movie}</li>
							})}
						</ul>
					</div>
				)
			})}
		</div>
	);
}

export default Directors
