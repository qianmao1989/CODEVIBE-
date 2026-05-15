import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaTachometerAlt, FaGamepad, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/websitelogo.png";

const Head = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="header-logo-wrapper">
        <Link to="/" aria-label="Go to homepage" className="logo-link" onClick={closeMobileMenu}>
          <img src={logo} alt="CodeVibe Logo" title="CodeVibe - Learn. Practice. Master." />
        </Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-menu" 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <div className={`header-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/Login" className="nav-link" onClick={closeMobileMenu}>
          <FaSignInAlt className="nav-icon" />
          <span>Login</span>
        </Link>

        <Link to="/Signup" className="nav-link" onClick={closeMobileMenu}>
          <FaUserPlus className="nav-icon" />
          <span>Sign Up</span>
        </Link>

        <Link to="/Dashboard" className="nav-link" onClick={closeMobileMenu}>
          <FaTachometerAlt className="nav-icon" />
          <span>Dashboard</span>
        </Link>
      </div>

      <h1>
        <FaGamepad style={{ marginRight: '0.5rem' }} />
        CodeVibe
        <FaGamepad style={{ marginLeft: '0.5rem' }} />
      </h1>
      <p>Learn • Practice • Master • Code | Level Up Your Programming Skills</p>
    </header>
  );
}

export default Head;
