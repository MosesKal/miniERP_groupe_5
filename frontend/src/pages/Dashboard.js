import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Card  from "../components/card";
import Seconcard from "../components/seconcard.jsx";
import "../styles/dashboard.css"

function Dashboard(){
    return(
   
        <div className="project-headings">
            <Sidebar/>
            <Navbar/>
           <div className="project-heading">
                <div className="project-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="project-seconcard">
                    <Seconcard/>
                    <Seconcard/>
                    <Seconcard/>
                    <Seconcard/>
                </div>
            </div>
            
            
        </div>

    )
} 
export default Dashboard;