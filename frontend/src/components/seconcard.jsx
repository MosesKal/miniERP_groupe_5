import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import "../styles/seconcard.css";


function Seconcard (){
    return(
    <div className="project-seconcards fade-in-animation">
          <div className="project-Icons" >
                    <div className="icons-cotation"><MonetizationOnIcon/></div> 
                    <p className="project-States"><span className="project-cots"><ArrowUpwardIcon/>22%</span> cotation</p>
          </div> 
          <div className="project-cotas">
                    <p className="project-Nbres">Kamoa Kopper</p>
                    <p className="project-titres">il y a jour et 1 heure</p>
          </div>   
    </div>

    )
} export default Seconcard;