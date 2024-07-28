import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavbarToggleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="https://example.com">
          <img
            src="imgs/logo.png"
            alt="Logo"
            width="36px"
            height="36px"
            className="d-inline-block align-top"
          />
          LAWLIET
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavbarToggleClick}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonials">
                TESTIMONIALS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Terms">
                TERMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Dashboard" target="_blank" rel="noreferrer">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://example.com">
                <i className="bi bi-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
