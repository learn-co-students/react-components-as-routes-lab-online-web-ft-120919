import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  constructor() {
    super()
  }

  generateActorCards = () => {
    return actors.map(actorInfo => {
      return (
        <div>
          <h2>{actorInfo.name}</h2>
          <ul>{actorInfo.movies.map(movie => <li>{movie}</li>)}</ul>
        </div>
      )
    })
  }//generateActorCards

  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {this.generateActorCards()}
      </div>
    )//return
  }//render
}//class

export default Actors;
