import React from "react";
import Sidebar from "../components/sidebar";
import Navright from "../components/navright";
import SearchIcon from '@mui/icons-material/Search';
import Tableau from "../components/table";
import "../styles/stock.css"

function Offres (){
    return(
      <div className="">
         <Sidebar/>
         <Navright/>
            <div className="project-stock">
                <h1>Offres</h1>              
                    <div className="project-catalogues">
                        <div className="project-catalogue"></div>                                                  
                        <div className="project-catalogue"></div>                        
                        <div className="project-catalogue"></div>                      
                    </div>
                    <div className="project-titles">
                         <p className="project-stats">catalogue des produits </p>
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
export default Offres;