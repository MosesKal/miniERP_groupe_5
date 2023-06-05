import React from "react";
import "../styles/login_page.css";
import { TextField, Button, Divider, Chip, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <div className="container-login">
      <div className="login-illustration"></div>
      <div className="container-formulaire">
        <div className="block-form">
          <div className="form-titre">
            <Typography variant="h4">Connexion</Typography>
          </div>
          <div className="formulaire">
            <form action="">
              <div className="div-input input1">
                <TextField
                  id="outlined-basic"
                  label="adresse mail"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                />
              </div>

              <div className="div-input input2">
                <TextField
                  id="outlined-basic"
                  label="mot de pass"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                />
              </div>

              <div className="block-divider">
                <div className=" btn btn1">
                  <Button variant="contained" fullWidth size="large">
                    Connexion
                  </Button>
                </div>

                <Divider>
                  <Chip label="OU" />
                </Divider>

                <div className=" btn btn2">
                  <Button variant="outlined" fullWidth size="large">
                    Créer un compt
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
