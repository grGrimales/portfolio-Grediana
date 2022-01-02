import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Contacto = () => {
  return (
    <>
      <main className="main-contacto">
        <div className="contenedor-contacto">
          <section className="section-form">
            <h1 className="text-center">Contacto</h1>
            <div className="contenedor-parrafo">
              <p>
                ¿Escribir una línea para decir "buenos días", pedir mi
                currículum o ver si podemos construir algo increíble juntos? ¡Me
                encantaría saber de ti! Complete su información en el formulario
                a continuación y espero tener noticias suyas.
              </p>
            </div>
          </section>

          <section className="section-redes">
            <form>
              <div className="contenedor-form">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div>
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="ej: lucia@learningenglish.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono">Telefóno</label>
                  <input
                    type="text"
                    name="telefono"
                    id="telefono"
                    placeholder="Ingrese número de contacto"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje">Mensaje</label>

                  <textarea
                    name="mensaje"
                    id="mensaje"
                    rows="10"
                    cols="30"
                  ></textarea>
                </div>

                <button className="btn-regular" type="submit">
                  Enviar <i class="far fa-envelope"></i>
                </button>
              </div>
            </form>

            <div className="contenedor-redes">
              <h2>Grediana Rojas Grimales</h2>
              <p>
                Telefóno: <span>+51 935-462-416</span>
              </p>
              <div className="contenedor-enlaces">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/grediana-rojas/"
                      target="_blank" aria-label="Abrir link página Linkendin de Grediana Rojas"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/grGrimales" target="_blank" aria-label="Abrir link página github de Grediana Rojas">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/grGrimales" target="_blank" aria-label="Abrir link de whatsapp de Grediana Rojas">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
