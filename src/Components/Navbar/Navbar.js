import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for styling

const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        <Link to="/" className="active">Home</Link>
        <Link to="/tea-factories">Tea Factories</Link>
        <Link to="/fertilizers">Fertilizer Factories</Link>
        <Link to="/chemicals">Chemical Factories</Link>
        <Link to="/baby-tea-plants">Baby Tea Plant suppliers</Link>
      </div>
    </div>
  );
}

export default Navbar;
