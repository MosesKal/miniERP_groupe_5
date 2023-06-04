import React from 'react';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BallotIcon from '@mui/icons-material/Ballot';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/sidebar.css';

function Sidebar() {
    return (
      <div className="project-sidebar">
        <div className='project-side'>
           <img className='project-logo' src="logo.jpg" alt="" />
           <div className='project-users'>
            <p>MINING</p>
           </div>
        </div>
        <ul className="project-menu">
          <li className="project-item"><AutoAwesomeMosaicIcon /><span className='item'>Dashboard</span></li>
          <li className='project-item'><BallotIcon/><span className='item'>Cotation</span></li>
          <li className="project-item"><ListAltIcon/><span className='item'>Gestion de commande</span></li>
          <li className="project-item"><CloudQueueIcon/><span className='item'>Gestion de stock</span></li>
          <li className="project-item"><AccountBalanceIcon/><span className='item'>Comptabilite</span> </li>
          <li className="project-item"><PeopleIcon/> <span className='item'>Client</span></li>
        </ul>
        <div className="project-setting">
          <SettingsIcon/> <span className='item'>Parametre</span>
        </div>
         
      </div>
    );
  }
  
export default Sidebar;  
  