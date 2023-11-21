import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'red',
  };

  const navLinkStyle = {
    marginRight: '10px', 
  };

  return (
    <div>
      <Link to="/" style={navLinkStyle}>
        Home
      </Link>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...activeStyles, ...navLinkStyle } : navLinkStyle)}
      >
        About
      </NavLink>
      <NavLink
        to="/profile"
        style={({ isActive }) => (isActive ? { ...activeStyles, ...navLinkStyle } : navLinkStyle)}
      >
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;
