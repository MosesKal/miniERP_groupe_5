import Register from "./components/Register";
import Login from "./components/Login";

import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";

import { Routes, Route } from "react-router-dom";
import Dash from "./components/Dash";

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.MINING, ROLES.ADMIN]} />}
        >
          <Route path="/" element={<Dash />} />
        </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="editor" element={<Editor />} />
        </Route> */}

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="admin" element={<Dash/>} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.SELER]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
