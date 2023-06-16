import React from "react";
import NavBar from "./components/NavBar";
import FileAriane from "./components/FileAriane";
import Navigation from "./pages/vendor/Navigation";

const DashboardSeler = () => {
  return (
    <div className="dash-container">
      <Navigation/>
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
          <div className="card-stat-1"></div>
          <div className="card-stat-2"></div>
        </div>
      </main>
    </div>
  );
};

export default DashboardSeler;
