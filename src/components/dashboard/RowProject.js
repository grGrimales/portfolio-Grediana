import React, { useEffect } from "react";
import { deleteProject } from "../../action/dashboard";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getProjectEdit } from "../../action/dashboard";


export const RowProject = (page) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

const {id, title, img, description, labels, order } = page;

  const handdleDeleteProject = (id) => {

    dispatch(deleteProject(id));
  };


  const handleEdit = (page) => {
  
    dispatch(getProjectEdit(page));
    navigate(`/login/dashboard/editar${page.id}`);
  };



  
  return (
    <tr>
           <td >{id}</td>
           <td>{title}</td>
           <td>
             <img src={img} width="250" />
           </td>

           <td>{description}</td>
           <td>{labels}</td>
           <td>{order}</td>
           

           <td>
             {" "}
             <button onClick={() => handdleDeleteProject(id)} className="btn btn-danger " type="submit">
               <i className="far borrar fa-times-circle borrar"></i>
             </button>
             <button className="btn btn-info ml-2" type="submit"  onClick={() => handleEdit(page)}>
               <i className="far fa-edit"></i>
             </button>
           </td>
         </tr>
  );
};
