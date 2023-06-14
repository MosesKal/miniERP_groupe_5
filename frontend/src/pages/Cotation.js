import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Cotation.css"
import { Button, } from "@mui/material";
import Tableau from "../components/table";




function Cotation() {
    return (
        <div className="">
            <Sidebar />
            <Navbar />
            <div className="project-Cotation">
                <h1 className="titles-Cotation">Cotation</h1>
               
                <div className="project-titles">
                    <p className="project-stats">demande de Cotation </p>
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
export default Cotation;