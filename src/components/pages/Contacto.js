import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { removeError, setError, startContacto } from "../../action/contacto";

import validator from "validator";



export const Contacto = () => {
 

  const dispatch = useDispatch();
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const { alerta, err } = useSelector((state) => state.contacto);

  const [formLoginValues, handleContactInputChange] = useForm({
    name: "carlos",
    phone: "935462416",
    email: "carlos.guzman@gmail.com",
    message: "mensaje de ejemplo...."
  });


  const {  name, phone, email, message  } = formLoginValues;
  
  const handleSubmit = (e) => {
      e.preventDefault();

      if (IsformValid()) {
        dispatch(startContacto( name, phone, email, message ));
        }

  };


    const IsformValid = () => {
        if (email.trim().length === 0 || name.trim().length === 0 || phone.trim().length === 0 ) {
          dispatch(setError("Los campos son obligatorios"));
          setTimeout(() => {
            dispatch(removeError());
          }, 5000);
          return false;
        }else if (!validator.isEmail(email)) {
          dispatch(setError("El correo no es válido"));
        setTimeout(() => {
            dispatch(removeError());
          }, 5000);
          return false;
        }
        return true;
       
        
      };

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
            <form >
              {alerta && <div className="alert-error">{err}</div>}
              <div className="contenedor-form">
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    required
                    placeholder="Ingrese su nombre"
                    onChange={handleContactInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Correo</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required

                    value={email}
                    placeholder="ej: lucia@learningenglish.com"
                    onChange={handleContactInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Telefóno</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    value={phone}
                    placeholder="Ingrese número de contacto"
                    onChange={handleContactInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="message">Mensaje</label>

                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    cols="30"
                    onChange={handleContactInputChange}
                  ></textarea>
                </div>

                <button 
                type="submit"
                className="btn-regular" 
                onClick={handleSubmit}
                   
                   >
                  Enviar <i className="far fa-envelope"></i>
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
