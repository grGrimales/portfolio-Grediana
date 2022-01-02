import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch} from "react-redux";
import { startLogin } from '../../../action/auth';
import { useForm } from '../../../hooks/useForm';

export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: "grediana@gmail.com",
        lPassword: "123456",
      });
      const { lEmail, lPassword } = formLoginValues;
      console.log(formLoginValues);
      
      const handleLogin = (e) => {
          e.preventDefault();
          navigate('dashboard');
          dispatch(startLogin(lEmail, lPassword));
        // if (IsformValid()) {
        // }

      };

    //   const IsformValid = () => {
    //     if (lEmail.trim().length === 0) {
    //       dispatch(setError("Email es requerido"));
    //       return false;
    //     } else if (!validator.isEmail(lEmail)) {
    //       dispatch(setError("Email no es valido"));
    //       return false;
    //     } else if (lPassword.trim().length === 0) {
    //       dispatch(setError("Contraseña es requerido"));
    //       return false;
    //     }
    //     dispatch(removeError());
    //     return true;
    //   };
    return (
        <>
          <form onSubmit={handleLogin}>
              <div className="contenedor-form">
                
                <div>
                  <label htmlFor="lEmail">Correo</label>
                  <input
                    type="email"
                    name="lEmail"
                    id="lEmail"
                    placeholder="ej: lucia@learningenglish.com"
                    name="lEmail"
                    value={lEmail}
                    onChange={handleLoginInputChange}
                  
                  />
                </div>

                <div>
                  <label htmlFor="lPassword">Contraseña</label>
                  <input
                    type="text"
                    id="lPassword"
                    placeholder="Ingrese número de contacto"
                    name="lPassword"
                    value={lPassword}
                    onChange={handleLoginInputChange}
                  />
                </div>

              

                <button className="btn-regular" type="submit">
                  Iniciar sesión <i className="far fa-envelope"></i>
                </button>
              </div>
            </form>
        </>
    )
}
