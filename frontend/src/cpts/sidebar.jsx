import React from 'react';
import { NavLink } from 'react-router-dom';
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

                    <li className="project-item">
                        <AutoAwesomeMosaicIcon />
                        <NavLink to="/" className='item'>Dashboard</NavLink>
                    </li>

                    <li className='project-item'>
                          <BallotIcon/><NavLink to="/Cotation" className='item'>Cotation</NavLink>
                    </li>

                    <li className='project-item'>
                          <BallotIcon/><NavLink to="/Offres" className='item'>Offres</NavLink>
                    </li>

                    <li className="project-item">
                          <ListAltIcon/><NavLink to="/Commande" className='item'>Commande</NavLink>
                    </li>
                    <li className="project-item">
                          <ListAltIcon/><NavLink to="/Rapport" className='item'>Rapport</NavLink>
                    </li>
                                
                    <li className="project-item">
                          <CloudQueueIcon/><NavLink to="/Stock" className='item'>Stock</NavLink>
                    </li>
                                      
                    <li className="project-item">
                          <AccountBalanceIcon/><NavLink to="/Comptabilite" className='item'>Comptabilite</NavLink>
                    </li>
                                          
                    <li className="project-item">
                          <PeopleIcon/> <NavLink to="/Client" className='ab item'>Client</NavLink>
                    </li>

            </ul>

            <div className="project-setting">
                <SettingsIcon/> <NavLink to="/Parametre" className='item'>Parametre</NavLink>
            </div>
         
      </div>
    );
  }
  
export default Sidebar;  
  