import React from "react";

import "../styles/login_page.css";
import FormConnexion from "../components/FormConnexion";

const LoginPage = () => {
  return (
    <div className="container-login">
      <div className="login-illustration"></div>
      <div className="container-formulaire">
        <FormConnexion />
      </div>
    </div>
  );
};

export default LoginPage;
