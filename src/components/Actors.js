import React from "react";
import { actors } from "../data";

const ActorDiv = () => {
  actors.map((actor, index) => (
    <div key={(actor, "-", index)}>
      <h4>{actor.name}</h4>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie) => (
          <li key={(actor, " ", movie)}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
};
const Actors = () => (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => (
      <div key={(actor, "-", index)}>
        <h4>{actor.name}</h4>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie) => (
            <li key={(actor, " ", movie)}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Actors;
