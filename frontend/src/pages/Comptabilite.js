import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Comptabilite.css"
import Tableau from "../components/comptabilite";
import { Button,  } from "@mui/material";


function Comptabilite (){
  return (
    <div className="">
        <Sidebar />
        <Navbar />
        <div className="project-Comptabilite">
            <h1 className="titles-Comptabilite">Comptabilite</h1>
            <div className="Comptabilite-project">
                <Button className="Comptabilite-button" variant="contained" > + proposition d'offre </Button>
              </div>
            <div className="project-titles">
           <p className=""></p> 
                <div className="navbar-searchs">
                    <input type="search" placeholder="Search...  " /><SearchIcon />
                </div>

            </div>
            <div className="">
                      <Tableau />
                    </div>
        </div>
    </div>
)
}
export default Comptabilite;