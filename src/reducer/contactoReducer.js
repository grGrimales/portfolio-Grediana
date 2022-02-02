import { types } from "../type/types";


const initialState = {
  alerta: null,
  err: {}
};

export const contactoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.contactSetError:
      return {
        err :  [action.payload],
       alerta: true,
      };
    case types.contactRemoveError:
      return {
        alerta: null,
     
      };

    default:
      return state;
  }
};