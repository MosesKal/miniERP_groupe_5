import Singup from "./pages/Singup";
import SingIn from "./pages/SignIn";
import "./styles/App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Cotation from "./pages/Cotation";
import Offres from "./pages/Offres.js";
import Client from "./pages/Client";
import Comptabilite from "./pages/Comptabilite";
import Commande from "./pages/Commande";
import Parametre from "./pages/Parametre";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/Cotation" element={<Cotation/>}></Route>
              <Route path="/Offres" element={<Offres/>}></Route>
              <Route path="/Commande" element={<Commande/>}></Route>
              <Route path="/Stock" element={<Stock/>}></Route>
              <Route path="/Comptabilite" element={<Comptabilite/>}></Route>
              <Route path="/Client" element={<Client/>}></Route>
              <Route path="/Parametre" element={<Parametre/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
