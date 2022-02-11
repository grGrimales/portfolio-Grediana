import React from "react";
import html from "../../images/HTML.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react-.png";

import firebase from "../../images/firebase.png";
import git from "../../images/git.png";
import sass from "../../images/sass.png";
import web from "../../images/w3c.png";
import github from "../../images/github.png";
import bootstrap from "../../images/bootstrap-.png";
import command from "../../images/command-line.png";
import responsive from "../../images/responsive.png";

export const Herramientas = () => {
  return (
    <>
      <section className="section-herramientas animate__animated animate__fadeIn">
        <h1 className="titulo">Mi caja de herramientas.</h1>
        <p>
          Las herramientas y tecnologías que utilizo para dar vida a páginas y
          aplicaciones Web:
        </p>

        <div className="contenedor-herramientas">
          <div className="herramienta">
            <img src={html} alt="Logo de HTML" />

            <p>HTML</p>
          </div>

          <div className="herramienta">
            <img src={css} alt="Logo de css" />

            <p>CSS</p>
          </div>

          <div className="herramienta">
            <img src={bootstrap} alt="Logo de bootstrap" />

            <p>Bootstrap</p>
          </div>
          <div className="herramienta">
            <img src={sass} alt="Logo de sass" />

            <p>Sass</p>
          </div>
          <div className="herramienta">
            <img src={js} alt="Javascript" />

            <p>JavaScript</p>
          </div>
          <div className="herramienta">
            <img src={react} alt="Logo de react" />

            <p>React</p>
          </div>

          <div className="herramienta">
            <img src={git} alt="Logo de git" />

            <p>Git</p>
          </div>
          <div className="herramienta">
            <img src={github} alt="Logo de github" />

            <p>Github</p>
          </div>
          <div className="herramienta">
            <img src={firebase} alt="Logo de firebase" />
            <p>Firebase</p>
          </div>

          <div className="herramienta">
            <img src={command} alt="Logo de command-line" />

            <p>Command-line</p>
          </div>
          <div className="herramienta">
            <img src={web} alt="Logo de web accesibility" />

            <p>Web accesibility</p>
          </div>
          <div className="herramienta">
            <img src={responsive} alt="Logo de responsive web sites" />

            <p>Responsive Websites</p>
          </div>
        </div>
      </section>
    </>
  );
};
