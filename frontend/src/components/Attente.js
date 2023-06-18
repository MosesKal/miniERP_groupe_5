import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import imgIllustration from "../assets/Illustration.png";
import { Typography } from "@mui/material";

const Attente = () => {
  return (
    <div className="register-containers">
      <section className="illustration-wrapper-register">
        <div className="logo">
          <Icon icon="icon-park-solid:blockchain" className="icon-logo" />
          <span className="app-title">small-erp</span>
        </div>
        <div className="icon-illustration">
          <img src={imgIllustration} alt="Logo" />
        </div>
      </section>

      <section className="register-former-container">
        <Typography variant="h3">Page d'attente</Typography>
        <Link to="/">Accueil</Link>
      </section>
    </div>
  );
};

export default Attente;
