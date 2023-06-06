import React, { useState } from "react";
import "../styles/login_page.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, Button, Divider, Chip, Typography } from "@mui/material";
// import { TextField, Button, Divider, Chip, Typography } from "@mui/material";
import Illutration from "./../composant/Illustration";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(false)

  function handleupdate() {
    setshowPassword(!showPassword)
  }

  return (
    <div className="container-login">
      <Illutration />
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
                  type={showPassword ? 'text' : 'password'}
                  size="normal"
                  className="input-form"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleupdate()}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>,
                  }}
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
                    Créer un compte
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
