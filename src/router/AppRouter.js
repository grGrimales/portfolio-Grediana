
import {
  Routes,
  Route
} from "react-router-dom";
 import { Portfolio } from "../components/pages/Portfolio";
 import { Herramientas } from "../components/pages/Herramientas";
 import { Contacto } from "../components/pages/Contacto";
import Home from "../Home";

export const AppRouter = () => {
    return (
    <Routes>
    <Route  path="/" element={<Home/>} />
      <Route  path="portfolio" element={<Portfolio/>} />
        <Route  path="herramientas" element={<Herramientas/>} />
        <Route  path="contacto" element={<Contacto/>} />
       
    </Routes>

    )
}
