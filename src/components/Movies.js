import React from 'react';
import { movies } from '../data';
import ListPage from './ListPage';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {ListPage(movies, "title", "genres", "time")}
    </div>
  )
};

export default Movies;
