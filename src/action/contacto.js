
import {  fetchSinToken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { types } from "../type/types";

export const startContacto = (name, phone, email, message) => {
  

    return async (dispatch) => {
      const resp = await fetchSinToken("contact", { name, phone, email, message }, "POST");
      const body = await resp.json();

  
      if (body.ok) {
        Swal.fire("Envío exitoso", '¡Gracias por contactarme!', "success");

      
      } else {
        Swal.fire("Error", body.msg, "error");
      }
  
    };
  };


  export const setError = (err) => ({
    type: types.contactSetError,
    payload: err,

  });
  
  export const removeError = () => ({
    type: types.contactRemoveError,
  });
  

  