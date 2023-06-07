import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Commande.css"
import { Button,  } from "@mui/material";



function Commande (){
    return(
      <div className="">
         <Sidebar/>
         <Navbar/>
            <div className="project-Commande">
            <h1 className="titles-commande">Commande</h1>
            <div className="contenaire-commande">
            <p> <spam className=" commande-spam">Commande</spam>    >>   Commande en cours</p>
              <div className="commande-project">
                <Button className="commande-button" variant="contained" > + proposition d'offre </Button>
              </div>
              </div>
                <div className="project-titles">
                         <p className="project-stats">commande validée </p>
                         <p className="project-stat" >commande en cours</p>
                         <div className="navbar-searchs">
                         <input type="search" placeholder="Search...  " /><SearchIcon/>
                </div>
                  </div>
                </div>

      </div>
    )
}
export default Commande;