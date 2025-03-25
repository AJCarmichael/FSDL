import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/vote">Vote</Link>
      <Link to="/results">Results</Link>
    </nav>
  );
}

export default Header;