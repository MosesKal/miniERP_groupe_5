const express = require("express");

/** middleware */
const { verifySessionToken } = require("../middleware/authentication");

/**express */
const route = express.Router();

/**Routes */

route.get("/profil", verifySessionToken, () => {
  const { user } = req;
  res.json({ user });
});

module.exports = route;
