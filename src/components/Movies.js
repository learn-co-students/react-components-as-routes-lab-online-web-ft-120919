import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {
  constructor() {
    super()
  }

  generateMovieCards = () => {
    return movies.map(movieInfo => {
      return (
        <div>
          <h2>{movieInfo.title}</h2>
          <p>{movieInfo.time} minutes</p>
          <ul>{movieInfo.genres.map(genre => <li>{genre}</li>)}</ul>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {this.generateMovieCards()}
      </div>
    )//return
  }
}//class

export default Movies;
