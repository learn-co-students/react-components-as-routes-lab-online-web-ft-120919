import React from 'react';
import { actors } from '../data';

const Actors = () => {
	return (
		<div>
			<h1>Actors Page</h1>
			{actors.map((actor, index) => {
				return (
					<div key={`actor-${index}`}>
						<h3>{actor.name}</h3>
						<ul>
							{actor.movies.map((movie, mIndex) => {
								return <li key={`movie-${mIndex}`}>{movie}</li>
							})}
						</ul>
					</div>
				)
			})}
		</div>
	);
};

export default Actors;
