import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
     <NavLink
        to="/"
        exact
        // style={link}
        activeStyle={{ background: 'grey' }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        // style={link}
        activeStyle={{ background: 'grey' }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        // style={link}
        activeStyle={{ background: 'grey' }}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        // style={link}
        activeStyle={{ background: 'grey' }}
      >Actors</NavLink>

    </div>
  );
};

export default NavBar;
