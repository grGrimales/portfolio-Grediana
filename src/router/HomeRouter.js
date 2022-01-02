
import { Routes, Route } from 'react-router-dom';
import { Home } from "../components/pages/Home";

import { Portfolio } from "../components/pages/Portfolio";
import { Herramientas } from "../components/pages/Herramientas";
import { Contacto } from "../components/pages/Contacto";
import { Login } from "../components/dashboard/auth/Login";


export const HomeRouter = () => {


    return (
        <>

                <Routes>
                <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="herramientas" element={<Herramientas />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="login" element={<Login />} />
                    

                </Routes>


        </>
    )
}
