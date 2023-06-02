import React from "react";
import "../styles/login_page.css";
import { TextField, Button } from "@mui/material";

const LoginPage = () => {
  return (
    <div className="container-login">
      <div className="login-illustration"></div>
      <div className="container-formulaire">
        <div className="block-form">
          <div className="form-titre">
            <h1 className="titreSignUp">Création du compte</h1>
          </div>
          <div className="formulaire">
            <form action="">
              <div className="div-input">
                <TextField
                  id="outlined-basic"
                  label="Adresse mail"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                />
              </div>

              <div className="div-input">
                <TextField
                  id="outlined-basic"
                  label="Adresse mail"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                />
              </div>

              <div className="btn">
                <Button variant="contained">Contained</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
