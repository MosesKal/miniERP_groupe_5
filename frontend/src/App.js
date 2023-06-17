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
  SELER: "seler",
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
        <Route path="attente" element={<Attente />} />

        {/* we want to protect these routes  */}
        <Route element={<RequireAuth allowedRoles={[ROLES.MINING]} />}>
          <Route path="/mining" element={<DashboardMining />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<Dash />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.SELER]} />}>
          <Route path="/seler" element={<Accueil/>} />
          <Route path="/seler/dashboard" element={<Accueil />} />
          <Route path="/seler/comptabilite" element={<Comptabilite />} />
          <Route path="/seler/gestionCommande" element={<GestionCommande />} />
          <Route path="/seler/gestionStock" element={<GestionStock />} />
          <Route path="/seler/planProduction" element={<PlanProduction />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
