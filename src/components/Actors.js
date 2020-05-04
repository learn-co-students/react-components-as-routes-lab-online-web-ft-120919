import React from 'react';
import { actors } from '../data';
import ListPage from './ListPage';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {ListPage(actors, "name", "movies")}
    </div>
  )
};

export default Actors;
