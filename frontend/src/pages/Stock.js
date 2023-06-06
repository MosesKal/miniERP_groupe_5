import React from "react";
import Sidebar from "../components/sidebar";
import Navright from "../components/navright";
import SearchIcon from '@mui/icons-material/Search';

import "../styles/stock.css"

function Stock (){
    return(
      <div className="">
         <Sidebar/>
         <Navright/>
            <div className="project-stock">
                <h1>Stock</h1>
                <p>stock >> catalogue</p>
                    <div className="project-catalogues">
                        <div className="project-catalogue">
                          
                        </div>
                        <div className="project-catalogue">

                        </div>
                        <div className="project-catalogue">

                        </div>
                    </div>
                    <div className="project-titles">
                         <p className="project-stats">catalogue des produits </p>
                         <div className="navbar-searchs">
                            <input type="search" placeholder="Search...  " /><SearchIcon/>
                        </div>
                    </div>
                    <div className="">

                    </div>
           
            </div>

      </div>
    )
}
export default Stock;