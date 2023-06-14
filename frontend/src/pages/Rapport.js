import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Rapport.css"
import Tableau from "../components/comptabilite";

function Rapport (){
  return (
    <div className="">
        <Sidebar />
        <Navbar />
        <div className="project-Rapport">
            <h1 className="titles-Rapport">Rapport</h1>
            <div className="contenaire-Rapport">
                <p> <spam className=" Rapport-spam">Rapport</spam>    >>   Rapport</p>
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
export default Rapport;