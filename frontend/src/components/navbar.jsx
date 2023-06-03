import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import '../styles/navbar.css';


function Navbar() {
  return (
    <div className="project-navbar">
      <div className="navbar-search">
      <SearchIcon/><input type="search" placeholder="Search...  " />
      </div>
      <div className="navbar-right">
        
      <div className="navbar-icons">
        <PeopleSharpIcon/>
        <NotificationsIcon/>
          
      </div>
        <div className="navbar-avatar">
       <img src="Avatar.png" alt="Avatar" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
