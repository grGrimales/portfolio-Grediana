import React from "react";

export const ListarProject = (page) => {

    const {id, title, img, description, labels } = page;

  return (
    <>
      <div className="project">
        <div className="cont-project-img">
           
          <img src={img} alt={title} />
        </div>
        <div className="cont-project-description">
           <h2>{title}</h2>
          <p>{description}</p>
          <p>{labels}</p>
          <div>
          <button type="button" className="btn-project">
            Ver Sitio Web <i class="fas fa-external-link-alt"></i>
          </button>
          <button type="button" className="btn-project">
            Ver Respositorio Github <i class="fas fa-external-link-alt"></i>
          </button>
          </div>
         
        </div>
      </div>
    </>
  );
};
