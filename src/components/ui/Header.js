import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

//import Dropdown from "react-bootstrap/Dropdown";

import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../action/auth";
export const Header = () => {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.auth);

  const navToggle = () => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu_visible");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(startLogout());
  };

  return (
    <Fragment>
      <header>
        {/* <img src={logo} alt="Logo" /> */}

        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-menu-link nav-enlace-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-menu-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-menu-link nav-enlace-link ${isActive ? "active" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink
                to="/herramientas"
                className={({ isActive }) =>
                  `nav-menu-link nav-enlace-link ${isActive ? "active" : ""}`
                }
              >
                Herramientas
              </NavLink>
            </li>

            <li className="nav-menu-item">
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `nav-menu-link nav-enlace-link ${isActive ? "active" : ""}`
                }
              >
                Contacto
              </NavLink>
            </li>

            {/* {!!logged ? (
              <li className="nav-menu-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {" "}
                    <Link  to="login/dashboard/crear">
                      Agregar project
                    </Link>{" "}
                    <Link  to="login/dashboard">
                      Listado Project
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
         
              </li>
            ) : null} */}
          </ul>
          {/* {!!logged ? (
            <button className="btn-logout" type="submit" onClick={handleLogout}>
              Logout
            </button>
          ) : null} */}
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
