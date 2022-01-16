import React,  {useState} from 'react'
import { startCreatePage } from "../../action/dashboard";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";


export const Crear = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleInputChange] = useForm({
      title: "recipe title",
      img: "your url img",
      tecnologias: "tecnologias",
      description: "description",
    });

    const [img, setSelectedImg] = useState()
  
    const { title, tecnologias, description } = formLoginValues;
    
/*
    const formData = new FormData();
    console.log(formData)
    */


    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  //  const labels = tecnologias.split('-'); 

  /*
  formData.append("img", img);
  formData.append("title", title);
  formData.append("labels", tecnologias.split('-'));
  formData.append("description", description);
  */

  const labels =  tecnologias.split('-')

     dispatch(

       
        startCreatePage({img, title, labels, description })
      );
    };
  
    return (
        <>
           <div className="container">
        <div className="card mt-3">
          <div className="card-header text-center  ">Crea una Nueva Page</div>
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
              {/* <div className="mb-3 ">
                <label className="form-label">Imagen Url</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="htps:/img.com"
                  name="img"
                  value={img}
                  onChange={handleInputChange}
                />
              </div> */}

              <input
                type="file"
               // value={selectedImg}
                onChange={(e) => setSelectedImg(e.target.files[0])}
              >
              

              
              </input>
              
            </div>

            <div className="mb-3">
              <label className="form-label">Tecnología utilizada</label>
              <input
                type="text"
                className="form-control"
                placeholder="css-html-javaScript"
                name="tecnologias"
                value={tecnologias}
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
            type="submit"
            className="d-grid gap-2 col-6 mx-auto btn btn-primary"
            onClick={handleSubmit}
          >
            Agregar Project
          </button>
        </form>
      </div> 
        </>
    )
}
