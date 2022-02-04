import Swal from "sweetalert2";
import { types } from "../type/types";

import { fetchConToken, fetchSinToken } from "../helpers/fetch";
const baseUrl = process.env.REACT_APP_API_URL;

export const startCreatePage = ({
  img,
  title,
  order,
  labels,
  description,
  linkServer,
  linkGithub,
}) => {
  return async (dispatch) => {
    //  const baseUrl = "https://portafolio-grediana.herokuapp.com/api";
    //  const baseUrl = "https://localhost:8080/api";
    try {
      const formData = new FormData();
      const token = localStorage.getItem("token") || "";
      if (img) {
        formData.append("img", img);
      }
      formData.append("title", title);
      formData.append("order", order);

      formData.append("labels", labels);
      formData.append("linkServer", linkServer);
      formData.append("linkGithub", linkGithub);
      formData.append("description", description);

      const resp = await fetch(baseUrl + "/page/create", {
        method: "POST",
        body: formData,
        headers: {
          "x-token": token,
        },
      });

      const body = await resp.json();

      if (resp.ok) {
        const { title, img, labels, description } = body;

        dispatch(addNewPage(title, img, labels, description));
        Swal.fire("success", body.msg, "success");
      } else {
        console.log(body);
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewPage = (title, img, labels, description) => ({
  type: types.pageAddNew,
  payload: {
    title,
    img,
    labels,
    description,
  },
});

export const listProject = (query = "") => {
  return async (dispatch) => {
    const resp = await fetchSinToken(`page?query=${query}` );
    const body = await resp.json();

    let listadoProjects = body.pages;
    dispatch(getListProject(listadoProjects));
  };
};

const getListProject = (listadoProjects) => ({
  type: types.pageList,
  payload: listadoProjects,
});

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`page/${id}`, {}, "DELETE");
      const body = await resp.json();
      Swal.fire("success", body.msg, "success");
    } catch (error) {
      Swal.fire("Error", "Ha ocurrido un error inesperado", "error");
    }
    dispatch(getDeleteProject(id));
  };
};

const getDeleteProject = (id) => ({
  type: types.pageDeleted,
  payload: id,
});

export const getProjectEdit = (project) => {
  return (dispatch) => {
    dispatch(getProjectEditAction(project));
  };
};

const getProjectEditAction = (project) => ({
  type: types.pageUpdated,
  payload: project,
});

export const startUpdateProject = ({
  title,
  img,
  labels,
  description,
  id,
  linkServer,
  linkGithub,
  order,
}) => {
  return async (dispatch) => {
    const formData = new FormData();
    const token = localStorage.getItem("token") || "";

    if (img) formData.append("img", img);
    formData.append("title", title);
    formData.append("labels", labels);
    formData.append("linkServer", linkServer);
    formData.append("linkGithub", linkGithub);
    formData.append("description", description);
    formData.append("order", order);

    console.log(id);

    const resp = await fetch(baseUrl + `/page/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        "x-token": token,
      },
    });

    const body = await resp.json();
    console.log(body);

    if (resp.ok) {
      dispatch(listProject());
      Swal.fire("success", body.msg, "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};


export const setquery = (query) => ({
  type: types.pageQuery,
  payload: query,
});