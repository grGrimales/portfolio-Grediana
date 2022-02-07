import { useEffect } from "react";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../components/ui/Header";
import { DashboardRoutes } from "./DashboardRouter";

import { PrivateRoute } from "./PrivateRouter";
import { startChecking } from "../action/auth";
import { Home } from "../components/pages/Home";

import { Portfolio } from "../components/pages/Portfolio";
import { Herramientas } from "../components/pages/Herramientas";
import { Contacto } from "../components/pages/Contacto";
import { Login } from "../components/dashboard/auth/Login";
import { listProject } from "../action/dashboard";

export const AppRouter = () => {


  const {query} = useSelector((state) => state.contacto);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(listProject(query));

  }, [dispatch, query]);


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="herramientas" element={<Herramientas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
       

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
