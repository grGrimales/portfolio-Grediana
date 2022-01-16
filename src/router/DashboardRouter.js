import { Dashboard } from "../components/dashboard/Dashboard"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { Crear } from "../components/dashboard/Crear";
import { Editar } from "../components/dashboard/Editar";

import { listProject } from "../action/dashboard";


export const DashboardRoutes = () => {

    const dispatch = useDispatch();
    dispatch(listProject());
    
    return (
        <>

                <Routes>
                   
                <Route path="login/dashboard" element={<Dashboard />} />
                <Route path="login/dashboard/crear" element={<Crear />} />
                <Route path="login/dashboard/editar:id" element={<Editar />} />

                </Routes>


        </>
    )
}
