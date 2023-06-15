import React from "react";
import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Box,
  Paper,
} from "@mui/material/";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NavBar from "./components/NavBar";
import FileAriane from "./components/FileAriane";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import GroupIcon from "@mui/icons-material/Group";
import CardStat from "./components/CardStat";

const Dash = () => {
  return (
    <div className="dash-container">
      <sidebar className="dash-sideBare">
        <div className="dash-sideBare_header">
          <div className="dash-sideBare_header__content">
            <h6>Admin Dashboard</h6>
          </div>
        </div>
        <div className="dash-sideBare_nav">
          <Divider />
        </div>
        <div className="dash-sideBare-menu">
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
                <span className="dash-menu-name">Dashboard</span>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ApartmentIcon fontSize="small" />
                <span className="dash-menu-name">Gestion Entreprise</span>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon fontSize="small" />
                <span className="dash-menu-name">Gestion de Produit</span>
              </ListItemIcon>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <GroupIcon fontSize="small" />
                <span className="dash-menu-name">Gestion Utilisateur</span>
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </div>
      </sidebar>

      <main className="dash-main">
        <div className="header-bar">
          <NavBar />
        </div>
        <div className="fil-ariane">
          <FileAriane />
        </div>
        <div className="titre-dash">
          <h4>Aperçu</h4>
        </div>
        <div className="container-card-apercu">
          <div className="apercu-1"></div>
          <div className="apercu-2"></div>
          <div className="apercu-3"></div>
          <div className="apercu-4"></div>
        </div>
        <div className="titre-dash">
          <h4>Statistiques</h4>
        </div>
        <div className="container-card-stat">
          <div className="card-stat-1">
          </div>
          <div className="card-stat-2"></div>
        </div>
      </main>
    </div>
  );
};

export default Dash;
