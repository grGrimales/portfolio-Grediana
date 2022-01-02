import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../type/types";



export const startLogin = (email, password) => {


    return async (dispatch) => {
      const resp = await fetchSinToken("auth/login", { email, password }, "POST");
      const body = await resp.json();
  
      if (body.ok) {
        localStorage.setItem("token", body.user.token);
  
        dispatch(
          login({
            uid: body.user.uid,
            name: body.user.name,
          })
        );
      }else {
        dispatch(checkingFinish());
      }
  
    };
  };

  export const checkingFinish = () => ({ type: types.authChekingFinish });

  export const startChecking = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token") || "";
      if (token === "") {
        dispatch(logout());
        return;
      }
      const resp = await fetchConToken("auth/renew-token");
      const body = await resp.json();
      if (body.ok) {
        localStorage.setItem("token", body.user.token);
        dispatch(
          login({
            uid: body.user.uid,
            name: body.user.name,
          })
        );
      } else {
        dispatch(checkingFinish());
      }
    };
  };


const login = (user) => ({
    type: types.authLogin,
    payload: user,
  });

  export const startLogout = () => {
    return (dispatch) => {
      localStorage.clear();
      dispatch(logout());
    };
  };

  const logout = () => ({ type: types.authLogout });