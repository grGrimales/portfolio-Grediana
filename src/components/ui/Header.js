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
             <NavLink to="/"  className={({ isActive }) => (isActive ? "active nav-menu-link nav-enlace-link" : "nav-menu-link nav-enlace-link")}>Home</NavLink>
            </li>

            <li className="nav-menu-item">
             <NavLink to="/portfolio"   className="nav-menu-link nav-enlace-link">Portfolio</NavLink>
        

            </li>
            <li className="nav-menu-item">
             <NavLink to="/herramientas"   className="nav-menu-link nav-enlace-link">Herramientas</NavLink>
            </li>

            <li className="nav-menu-item">
             <NavLink to="/contacto"   className="nav-menu-link nav-enlace-link">Contacto</NavLink>

    
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
