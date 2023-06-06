import React from "react"
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import CircularProgress from '@mui/material/CircularProgress';
import '../styles/card.css';

function Card (){
    return(
        <div className="project-card fade-in-animation">
            <div className="project-cota">
                 <h2 className="project-Nbre">15</h2>
                 <p className="project-titre">Commandes</p>
            </div>
            <div className="project-Icon" ><img src="Ellipse 3.png" alt="" /></div> 
            
        </div>
    )
}
export default Card;