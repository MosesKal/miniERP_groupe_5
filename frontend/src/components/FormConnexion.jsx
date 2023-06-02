import React from "react";
import Button from "@mui/material/Button";
import { Input, TextField } from "@mui/material";

const FormConnexion = () => {
  return (
    <div className="form-signin">
      <div className="container-form">
        <form action="" method="post">

          <div className="champ">
            <TextField
              id="outlined-basic"
              label="adresse mail"
              variant="outlined"
            />
          </div>
          <div className="champ">
            <TextField
              id="outlined-basic"
              label="mot de pass"
              variant="outlined"
            />
          </div>
          <Button variant="contained">Hello World</Button>
        </form>
      </div>
    </div>
  );
};

export default FormConnexion;
