import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          BTN Movie
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${currentPath === "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${currentPath === "/contact" ? "active" : ""}`}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${currentPath === "/about" ? "active" : ""}`}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
