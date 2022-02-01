import React from "react";
import { Link } from "react-router-dom";

export const ListarProject = (page) => {
  const { id, title, img, description, labels, linkGithub, linkServer} = page;

  return (
    <>
      <div className="project">
        <div className="cont-project-img">
          <img src={img} alt={title} />
        </div>
        <div className="cont-project-description">
          <h2>{title}</h2>
          <p>{description}</p>
         
          <div>
            <button type="button" className="btn-project">
              <a
                href={linkServer}
                target="_blank"
              >
                Ver Sitio Web <i class="fas fa-external-link-alt"></i>
              </a>
            </button>
            <button type="button" className="btn-project">   <a
                href={linkGithub}
                target="_blank"
              >
               Ver Repositorio Github  <i class="fas fa-external-link-alt"></i>
              </a>

              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
