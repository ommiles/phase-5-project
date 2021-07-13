import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <NavLink
      to='/'
      activeStyle={{
        fontWeight: 'bold',
        color: 'black',
      }}
    >
      CODINAIRE
    </NavLink>
  );
}
