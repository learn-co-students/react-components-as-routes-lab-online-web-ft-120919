import React from 'react';
import { directors } from '../data';
import ListPage from './ListPage';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {ListPage(directors, "name", "movies")}
    </div>
  )
}

export default Directors
