import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const navToggle = () => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu_visible");
  };
  return (
    <Fragment>
      <header>
        {/* <img src={logo} alt="Logo" /> */}

        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-menu-item">
             <NavLink to="/"  className={({ isActive }) => `nav-menu-link nav-enlace-link ${ isActive ? "active" : ""}`}>Home</NavLink>
            </li>

            <li className="nav-menu-item">
             <NavLink to="/portfolio"    className={({ isActive }) => `nav-menu-link nav-enlace-link ${ isActive ? "active" : ""}`}>Portfolio</NavLink>
        

            </li>
            <li className="nav-menu-item">
             <NavLink to="/herramientas"    className={({ isActive }) => `nav-menu-link nav-enlace-link ${ isActive ? "active" : ""}`}>Herramientas</NavLink>
            </li>

            <li className="nav-menu-item">
             <NavLink to="/contacto"   className={({ isActive }) => `nav-menu-link nav-enlace-link ${ isActive ? "active" : ""}`}>Contacto</NavLink>

    
            </li>
          </ul>
        </nav>
        <button
          onClick={navToggle}
          className="nav-toggle"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>
    </Fragment>
  );
};
