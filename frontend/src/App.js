import Register from "./components/Register";
import Login from "./components/Login";

import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import DashboardMining from "./components/DashboardMining";
import Accueil from "./components/pages/vendor/Accueil";
import Comptabilite from "./components/pages/vendor/Comptabilite";
import GestionCommande from "./components/pages/vendor/GestionCommande";
import GestionStock from "./components/pages/vendor/GestionStock";
import PlanProduction from "./components/pages/vendor/PlanProduction";

import { Routes, Route } from "react-router-dom";
import Dash from "./components/Dash";
import Attente from "./components/Attente";

const ROLES = {
  MINING: "mining",
  SELLER: "seller",
  ADMIN: "admin",
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/attente" element={<Attente />} />

        {/* we want to protect these routes  */}
        <Route element={<RequireAuth allowedRoles={[ROLES.MINING]} />}>
          <Route path="/mining" element={<DashboardMining />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<Dash />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.SELLER]} />}>
          <Route path="/seller" element={<Accueil/>} />
          <Route path="/seller/dashboard" element={<Accueil />} />
          <Route path="/seller/comptabilite" element={<Comptabilite />} />
          <Route path="/seller/gestionCommande" element={<GestionCommande />} />
          <Route path="/seller/gestionStock" element={<GestionStock />} />
          <Route path="/seller/planProduction" element={<PlanProduction />} />
        </Route>
        
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
