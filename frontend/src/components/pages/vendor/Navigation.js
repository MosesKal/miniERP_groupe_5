import React from "react";
import { NavLink } from "react-router-dom";
import { Divider, MenuList, MenuItem, ListItemIcon } from "@mui/material/";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navigation = () => {
  return (
    <sidebar className="dash-sideBare">
      <div className="dash-sideBare_header">
        <div className="dash-sideBare_header__content">
          <h6>Dashboard prestataire</h6>
        </div>
      </div>
      <div className="dash-sideBare_nav">
        <Divider />
      </div>
      <div className="dash-sideBare-menu">
        <MenuList>
          <MenuItem>
            <NavLink to="/seller">
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
                <span className="dash-menu-name">Dashboard</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/seller/comptabilite">
              <ListItemIcon>
                <AccountBalanceWalletIcon fontSize="small" />
                <span className="dash-menu-name">Comptabilite</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/seller/gestionCommande">
              <ListItemIcon>
                <ListAltIcon Size="small" />
                <span className="dash-menu-name">Commande</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/seller/gestionStock">
              <ListItemIcon>
                <ProductionQuantityLimitsIcon fontSize="small" />
                <span className="dash-menu-name">Stock</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/seller/planProduction">
              <ListItemIcon>
                <InventoryIcon fontSize="small" />
                <span className="dash-menu-name">Plan de production</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/seller/Cotation">
              <ListItemIcon>
                <AddShoppingCartIcon fontSize="small" />
                <span className="dash-menu-name">Cotation</span>
              </ListItemIcon>
            </NavLink>
          </MenuItem>
        </MenuList>
      </div>
      <div className="param">
        <div className="dash-sideBare_nav">
          <Divider />
        </div>
        <div className="dash-sideBare-menu-param">
          <MenuList>
            <MenuItem>
              <NavLink to="/seller">
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                  <span className="dash-menu-name">Parametre</span>
                </ListItemIcon>
              </NavLink>
            </MenuItem>
          </MenuList>
        </div>
      </div>
    </sidebar>
  );
};

export default Navigation;
