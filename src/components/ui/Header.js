import React from "react";

export const Header = () => {

const navToggle = () =>{

    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu_visible");

}
  return (
    <>
      <header>

          {/* <img src={logo} alt="Logo" /> */}

        
        <nav className="nav">
        
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link ">
                {" "}
                Home
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link ">
                {" "}
                Portfolio
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link ">
                {" "}
                Herramientas
              </a>
            </li>

           
            <li className="nav-menu-item">
              {" "}
              <a href="#" className="nav-menu-link nav-link ">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={navToggle} className="nav-toggle" aria-label="Abrir menú">
            <i className="fas fa-bars"></i>
          </button>
      </header>
     
    </>
  );
};