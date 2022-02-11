import React from "react";

export const Home = () => {
  return (
    <>
      <main className="main-home">
        <h1 className="title-home">¡Hola soy Grediana Rojas!</h1>
        <div className="contenedor-home animate__animated animate__fadeIn">
          <h2> Desarrolladora Front-end</h2>

          <div className="cont-descripcion">
            <p>
              Desarrolladora front-end me encanta poder plasmar en tangibles
              pensamientos e ideas gracias a lo versátil y dinámico que es este
              campo. Mi curiosidad me lleva a seguir profundizando los
              conocimientos adquiridos y a aprender nuevas herramientas en el
              sector de la tecnología.
            </p>
          </div>

          {/* 
          <div
            id="carouselHome"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={logo} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={responsive3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={responsive4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
        </div>
      </main>
    </>
  );
};
