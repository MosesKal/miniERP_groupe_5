import React from "react";
import "../styles/login_page.css";
// import IconButton from '@material-ui/core/IconButton';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, Button, Divider, Chip, Typography } from "@mui/material";
import Illutration from "../components/Illustration";



const Singup = () => {

  return (
    <div className="container-login">
      <Illutration/>
      <div className="container-formulaire">
        <div className="block-form">
          <div className="form-titre">
            <Typography variant="h4" >Création du compte</Typography>
          </div>
          <div className="formulaire">
            <form action="">
              <div className="div-input input1">
                <TextField
                  id="outlined-basic"
                  label="Nom complet"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                />
              </div>

              <div className="div-input input2">
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
                  label="Entrez le mots de passe"
                  variant="outlined"
                  size="normal"
                  className="input-form"
                  
                />
              </div>

              <div className="block-divider">
                <div className=" btn btn1">
                  <Button variant="contained" fullWidth size="large">
                    Créer
                  </Button>
                </div>

                <Divider>
                  <Chip label="Avez-vous déjà un compte?" />
                </Divider>

                <div className=" btn btn2">
                  <Button variant="outlined" fullWidth size="large">
                    connexion
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

export default Singup;
