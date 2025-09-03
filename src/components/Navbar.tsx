import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import strings from "../strings.json";

const Navbar: React.FC = () => {
  const { links } = strings.navbar;
  const { brandName, logo } = strings.globals;

  const [isCollapsed, setIsCollapsed] = useState(true);

  // Toggle collapse on hamburger click
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  // Close collapse when a link is clicked
  const closeNavbar = () => setIsCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top custom-navbar">
      <div className="container">
        {/* Brand Logo */}
        <NavLink
          className="navbar-brand fw-bold text-warning fs-4 d-flex align-items-center"
          to="/"
          onClick={closeNavbar}
        >
          <img
            src={logo}
            alt={`${brandName} Logo`}
            style={{ height: "40px", width: "auto" }}
            className="me-2"
          />
          <span>{brandName}</span>
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map((item) => (
              <li className="nav-item mx-2" key={item.path}>
                <NavLink
                  end={item.path === "/"}
                  to={item.path}
                  onClick={closeNavbar} // Close menu on link click
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill position-relative ${
                      isActive ? "active-link" : "text-light"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
