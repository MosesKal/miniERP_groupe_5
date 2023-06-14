import React from "react";
import { Divider, Avatar } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

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
        <div className="dash-sideBare-menu"></div>
      </sidebar>

      <main className="dash-main">
        <div className="header-bar">
          <div className="header-bar-search">
            <div className="search-container"></div>
          </div>
          <div className="header-bar-avatar">
            <Avatar
              alt="Remy Sharp"
              src=""
              sx={{ width: 56, height: 56 }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dash;
