import React from "react";
import { Divider } from "@mui/material/";
import NavBar from "./components/NavBar";

const DashboardSeler = () => {
  return (
    <div className="dash-container">
      <sidebar className="dash-sideBare">
        <div className="dash-sideBare_header">
          <div className="dash-sideBare_header__content">
            <h6>Dashboard Prestataire</h6>
          </div>
        </div>
        <div className="dash-sideBare_nav">
          <Divider />
        </div>
        <div className="dash-sideBare-menu"></div>
      </sidebar>

      <main className="dash-main">
        <div className="header-bar">
          <NavBar />
        </div>
      </main>
    </div>
  );
};

export default DashboardSeler;
