import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  constructor() {
    super()
  }//constructor

  generateDirectorCards = () => {
    return directors.map(directorInfo => {
      return (
        <div>
          <h2>{directorInfo.name}</h2>
          <ul>{directorInfo.movies.map(movieName => <li>{movieName}</li>)}</ul>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <h1>Directors Page</h1>
        {this.generateDirectorCards()}
      </div>
    )
  }//render
}//class

export default Directors;
