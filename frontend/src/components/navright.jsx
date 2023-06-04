import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import '../styles/navright.css';


function Navright() {
  return (
    <div className="project-navright">
      <div className="navright-right">
        
      <div className="navright-icons">
        <PeopleSharpIcon/>
        <NotificationsIcon/>
          
      </div>
        <div className="navright-avatar">
       <img src="Avatar.png" alt="Avatar" />
        </div>
      </div>
    </div>
  );
}
export default Navright;
