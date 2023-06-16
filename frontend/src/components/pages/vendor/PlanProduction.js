import React from "react";
import Navigation from "./Navigation";
import NavBar from "./../../components/NavBar";
import FileAriane from "./../../components/FileAriane";
import { Typography } from "@mui/material";
import CardApercu from "../../components/CardApercu";
import CardStat from "../../components/CardStat";
import imageCotation from "../../../assets/cotation.png";
import imageProduit from "../../../assets/produit.png";
import imageCmdEnCour from "../../../assets/cmdEnCour.png";
import imageClient from "../../../assets/client.png";
import imageAffaire from "../../../assets/affaire.png";

const GestionStock = () => {
  return (
    <div className="dash-container">
      <Navigation />
      <main className="dash-main">
        <div className="header-bar">
          <NavBar />
        </div>
        <div className="fil-ariane">
          <FileAriane />
        </div>
        <div className="titre-dash">
          <Typography variant="body1">Aperçu</Typography>
        </div>
        <div className="container-card-apercu-st">
          <CardApercu content={"Cotations"} image={imageCotation} number={8} />
          <CardApercu content={"Stock"} image={imageProduit} number={155} />
          <CardApercu content={"En cour"} image={imageCmdEnCour} number={30} />
          <CardApercu content={"Mes clients"} image={imageClient} number={3} />
          <CardApercu
            content={"Affaire"}
            image={imageAffaire}
            number={"2000$"}
          />
        </div>
        <div className="titre-dash">
          <Typography variant="body1">Statistiques</Typography>
        </div>
        <div className="container-stat">
          <CardStat image={imageClient} size={"52.5%"} />
          <CardStat image={imageClient} size={"36%"} />
        </div>
      </main>
    </div>
  );
};

export default GestionStock;
