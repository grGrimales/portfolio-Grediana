
import {BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 import { Portfolio } from "../components/pages/Portfolio";
 import { Herramientas } from "../components/pages/Herramientas";
 import { Contacto } from "../components/pages/Contacto";
import { Home } from "../components/pages/Home";
import { Header } from "../components/ui/Header";

export const AppRouter = () => {
    return (
    <BrowserRouter>
     <Header />

    <Routes>
    <Route  path="/" element={<Home/>} />
      <Route  path="portfolio" element={<Portfolio/>} />
        <Route  path="herramientas" element={<Herramientas/>} />
        <Route  path="contacto" element={<Contacto/>} />
        <Route  path="*" element={<Home/>} />
       
    </Routes>
  </BrowserRouter>
    )
}
