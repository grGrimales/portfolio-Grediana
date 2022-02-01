
import {  fetchSinToken } from "../helpers/fetch";
import Swal from "sweetalert2";

export const startContacto = (name, phone, email, message) => {
  

    return async (dispatch) => {
      const resp = await fetchSinToken("contact", { name, phone, email, message }, "POST");
      const body = await resp.json();

      console.log(body)
  
      if (body.ok) {
        Swal.fire("Success", body.msg, "success");

  console.log(body.message);
      
      } else {
        Swal.fire("Error", body.msg, "error");
      }
  
    };
  };


