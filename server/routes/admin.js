const express = require("express");
const { PostRegisterMining } = require("./../controllers/adminController");

/**express */
const route = express.Router();

/**Routes */

// route.get("/profil", );

route.post("/registerMining", PostRegisterMining);

module.exports = route;
