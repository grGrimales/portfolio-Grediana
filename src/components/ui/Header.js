import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
             <Link to="/"   className="nav-menu-link nav-link ">Home</Link>
            </li>

            <li className="nav-menu-item">
             <Link to="/portfolio"   className="nav-menu-link nav-link ">Portfolio</Link>
        

            </li>
            <li className="nav-menu-item">
             <Link to="/herramientas"   className="nav-menu-link nav-link ">Herramientas</Link>
            </li>

            <li className="nav-menu-item">
             <Link to="/contacto"   className="nav-menu-link nav-link ">Contacto</Link>

    
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
