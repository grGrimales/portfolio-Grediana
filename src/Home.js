import { Header } from "./components/ui/Header";
import logo from "./images/black-jack.png";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="cont-descripción">
          <h1>
            ¡Buen día soy <span>Grediana Rojas!</span>
          </h1>

          <p>
            Mi curiosidad me lleva a seguir profundizando los conocimientos
            adquiridos y a aprender nuevas herramientas en el sector de la
            tecnología. Autodidacta, disciplinada y responsable me gustan las
            exigencias profesionales, los nuevos retos y poder plasmar en
            tangibles pensamientos e ideas. Manejo tecnologías para el
            desarrollo en front-end: HTML, Css, JavaScript, React, Angular,
            otros.
          </p>
        </section>

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={logo} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={logo} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={logo} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
