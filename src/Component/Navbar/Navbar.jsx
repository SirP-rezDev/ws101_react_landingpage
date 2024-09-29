import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import weba from './weba.jpg';

function Navbar() {
  return (
    <div id='mains'>
      <div className="logo">
        <img id='logo' src={weba} alt="" />
        <h2 id='webs'><span>Web </span>Devlopment</h2>
      </div>
      <div className="nav">
        <nav>
          <Link to="/">Home</Link>  {/* Clicking this will render the Body component */}

          <Link to="/about">About</Link>  {/* Clicking this will render the About component */}
        </nav>
      </div>
      
    </div>
  );
}

export default Navbar;

