import  React from "react";
import BasicSelect from "../components/annebtn";
import "../styles/graph.css";







function Graph(){
    return(
      <div className="project-graph fade-in-animation">
        <div className="project-title">
            <p className="project-stat">Statistique des commandes validées </p>
            <BasicSelect/>
        </div>
        <div className="">
            
        </div>

      </div>
    )
} export default Graph;
