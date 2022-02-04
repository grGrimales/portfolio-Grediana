import { types } from "../type/types";


const initialState = {
  alerta: null,
  err: {},
  query: ''
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
      case types.pageQuery:
        return {
          ...state,
          query: [action.payload],
         
        };
    default:
      return state;
  }
};