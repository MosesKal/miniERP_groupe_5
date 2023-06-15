import React from "react";
import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material/";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NavBar from "./components/NavBar";
import FileAriane from "./components/FileAriane";

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
      </main>
    </div>
  );
};

export default Dash;
