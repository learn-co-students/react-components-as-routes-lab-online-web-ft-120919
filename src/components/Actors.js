import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div
    > 
    <h1> Actors Page </h1>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(actor => <div>{actor.name} <ul>{actor.movies}</ul> </div>)}
    {/* <div className="actors" ></div>
    <div className="actors" ></div>
    <div className="actors" ></div>
    <div className="actors" ></div> */}

    </div>
  );
};

export default Actors;
