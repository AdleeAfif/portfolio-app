import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./img/adlee-logo.ico";

function Header() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <header className="header">
      <nav className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" className="header-logo" />
        </div>

        <div className="nav-links">
          <NavLink
            // onClick={() => scrollToSection("home")}
            className="header-text"
            to="/"
          >
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
    </header>
  );
}
export default Header;
