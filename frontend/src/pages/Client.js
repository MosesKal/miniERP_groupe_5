import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import "../styles/stock.css"
import Tableau from "../components/tableau";
import { Button, } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import "../styles/Client.css"
// import Fab from '@material-ui/core/Fab';
import { Fab } from '@mui/material';

function Client() {
  return (
    <div className="">
      <Sidebar />
      <Navbar/>
       <div className="project-client">
           <h1 className=".client-spam">Client</h1>
            <div className="addBtn">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
            <div className="">
             <Tableau />
            </div>
      </div>
    </div>
    )
}
export default Client;