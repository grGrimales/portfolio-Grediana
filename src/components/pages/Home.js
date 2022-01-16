import React from 'react'
import logo from '../../images/responsive-2.png';
import responsive3 from '../../images/responsive-3.png';
import responsive4 from '../../images/responsive-4.png';




export const Home = () => {
    return (
        <>
        <main>
            <div className="contenedor-home">
            <section className="cont-descripcion">
            <h1>
              ¡Buen día soy <span>Grediana Rojas!</span>
            </h1>
  
            <p>
              Miiiiii curiosidad me lleva a seguir profundizando los conocimientos
              adquiridos y a aprender nuevas herramientas en el sector de la
              tecnología. Autodidacta, disciplinada y responsable me gustan las
              exigencias profesionales, los nuevos retos y poder plasmar en
              tangibles pensamientos e ideas. Manejo tecnologías para el
              desarrollo en front-end: HTML, Css, JavaScript, React, Angular,
              otros.
            </p>
          </section>
  
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
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
            </div>
      
        </main>

     
      </>
    )
}
