import React, { useState }  from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateProject } from "../../action/dashboard";
import { useNavigate } from "react-router-dom";

export const Editar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [img, setSelectedImg] = useState();

  const page = useSelector((state) => state.dashboard.pagesEditar);

  const [formValues, handleInputChange] = useForm(page);
  const { title, labels, description, id, linkServer , linkGithub, order} = formValues;

  const handdleUpdateProject = (e) => {
    e.preventDefault();
    dispatch(startUpdateProject({title, img, labels, description, id, linkServer , linkGithub, order}));
    navigate('/login');
  };

  return (
    <>
      <div className="container">
        <div className="card mt-3">
          <div className="card-header text-center">Crea una Nueva Page</div>
        </div>
        <form className=" mt-3">
          <div className="row">
            <div className=" col-6">
              <div className="mb-3 ">
                <label className="form-label">Nombre page</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Arroz con pollo..."
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                />
              </div>
    
              <div className="mb-3 ">
                <label className="form-label">order</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Arroz con pollo..."
                  name="order"
                  value={order}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="file"
                onChange={(e) => setSelectedImg(e.target.files[0])}
              ></input>

            </div>

            <div className="mb-3">
              <label className="form-label">Tecnología utilizada</label>
              <input
                type="text"
                className="form-control"
                placeholder="css-html-javaScript"
                name="labels"
                value={labels}
                onChange={handleInputChange}
              />
            </div>



            <div className="mb-3">
              <label className="form-label">Linkserver</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. puedes ver en tiempo real..."
                name="linkServer"
                value={linkServer}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">LinkGihub</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. puedes ver en tiempo real..."
                name="linkGithub"
                value={linkGithub}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. puedes ver en tiempo real..."
                name="description"
                value={description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            onClick={handdleUpdateProject}
            type="submit"
            className="d-grid gap-2 col-6 mx-auto btn btn-primary"
          >
            Editar Project
          </button>
        </form>
      </div>
    </>
  );
};
