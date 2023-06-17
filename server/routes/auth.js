const express = require("express");
const {
  PostLogin,
  PostLogout,
  PostRegister,
  PostForgotPassword,
  PostResetPassword,
} = require("./../controllers/authController");

/** middleware */
const {verifySessionToken} = require("../middleware/authentication");

/**express */
const route = express.Router();

/**Routes */

route.post("/login", PostLogin);

route.post("/logout", verifySessionToken, PostLogout);

route.post("/register", PostRegister);

route.post("/forgotPassword", PostForgotPassword);

route.post("/resetPassword", PostResetPassword);

module.exports = route;
