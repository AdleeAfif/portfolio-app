import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./img/adlee-logo.ico";

function Header() {
  return (
    <nav className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" className="header-logo" />
      </div>

      <div className="nav-links">
        <NavLink className="header-text" to="/">
          Home
        </NavLink>
        <NavLink className="header-text" to="/about">
          About
        </NavLink>
        <NavLink className="header-text" to="/project">
          Project
        </NavLink>
        <NavLink className="header-text" to="/stack">
          Stack
        </NavLink>
        <NavLink className="header-text" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
export default Header;
