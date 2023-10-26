// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#">U.S</a>
        <a href="#">World</a>
        <a href="#">Business</a>
        <a href="#">Arts</a>
        <a href="#">Lifestyle</a>
        <a href="#">Opinion</a>
        <a href="#">Audio</a>
        <a href="#">Games</a>
        <a href="#">Cooking</a>
        <a href="#">Wirecutter</a>
        <a href="#">TheAthletic</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>
    </nav>
  );
};

export default NavBar;
