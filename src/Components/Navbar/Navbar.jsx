/* eslint-disable react/no-unescaped-entities */
import "./Navbar.css";
import logo from "/assets/newmanclublogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Newman Club Logo" className="logo" />
      </div>
      <ul className={`nav-links ${showMenu ? "active" : ""}`}>
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">The Crew</a>
        </li>
        <li className="nav-link">
          <a href="#">Events</a>
        </li>
        <li className="nav-link">
          <a href="#">What's new</a>
        </li>
        <li className="nav-link">
          <a href="#">Virtual Office</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
        <li className="nav-link">
          <div className="parish-name-container">
            <span className="parish-name">Maria Reina Parish</span>
          </div>
        </li>
        <li className="nav-link social-links">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </li>
        <li className="nav-link social-links">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
        </li>
      </ul>
      <div
        className={`mobile-menu-icon ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-icon">&#9776;</span>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
