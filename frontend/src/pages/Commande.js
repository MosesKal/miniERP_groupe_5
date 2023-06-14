import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Commande.css"
import { Button,  } from "@mui/material";
import Tableau from "../components/table";




function Commande (){
    return(
      <div className="">
         <Sidebar/>
         <Navbar/>
            <div className="project-Commande">
            <h1 className="titles-commande">Commande</h1>
            <div className="commande-project">
                <Button className="commande-button" variant="contained" > + proposition d'offre </Button>
              </div>
          
                <div className="project-titles">
                          <p className="project-stat" >commande en cours</p>
                         <div className="navbar-searchs">
                         <input type="search" placeholder="Search...  " /><SearchIcon/>
                </div>
                  </div>
                  <div className="">
                      <Tableau />
                    </div>
                </div>

      </div>
    )
}
export default Commande;