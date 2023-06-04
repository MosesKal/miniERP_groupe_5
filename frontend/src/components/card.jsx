import React from "react"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import '../styles/card.css';

function Card (){
    return(
        <div className="project-card fade-in-animation">
            <div className="project-cota">
                 <p className="project-titre">Demande des Cotations</p>
                 <h2 className="project-Nbre">$15k</h2>
                 <p className="project-State"><span className="project-cot"><ArrowUpwardIcon/>22%</span> cotation</p>
            </div>
            <div className="project-Icon" ><div className="icon-cotation"><MonetizationOnIcon/></div> </div> 
            
        </div>
    )
}
export default Card;