import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserPlus,
  FaTachometerAlt,
  FaGamepad,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "../assets/websitelogo.png";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    closeMobileMenu();
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {/* Logo Section */}
      <div className="header-logo-wrapper">
        <Link
          to="/"
          aria-label="Go to homepage"
          className="logo-link"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="CodeVibe Logo"
            title="CodeVibe - Learn. Practice. Master."
          />
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <div className={`header-nav ${menuOpen ? "open" : ""}`}>
        {user ? (
          <>
            <Link
              to="/Dashboard"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              <FaTachometerAlt className="nav-icon" />
              <span>Dashboard</span>
            </Link>
            <button
              className="nav-link"
              onClick={handleLogout}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FaSignOutAlt className="nav-icon" />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to="/Login"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              <FaSignInAlt className="nav-icon" />
              <span>Login</span>
            </Link>
            <Link
              to="/Signup"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              <FaUserPlus className="nav-icon" />
              <span>Sign Up</span>
            </Link>
          </>
        )}
      </div>

      {/* Heading */}
      <h1>
        <FaGamepad style={{ marginRight: "0.5rem" }} />
        CodeVibe
        <FaGamepad style={{ marginLeft: "0.5rem" }} />
      </h1>

      <p>
        Learn • Practice • Master • Code | Level Up Your Programming Skills
      </p>
    </header>
  );
};

export default Head;
