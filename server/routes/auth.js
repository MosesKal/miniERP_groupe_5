const express = require("express");
const multer = require("multer");
const {
  PostLogin,
  PostLogout,
  PostRegister,
  PostForgotPassword,
  PostResetPassword,
} = require("./../controllers/authController");

/** middleware */
const {
  verifySessionToken,
  checkStatus,
} = require("../middleware/authentication");

/**express */

const route = express.Router();

const upload = multer({dest : 'uploads'});

/**Routes */

route.post("/login", checkStatus, PostLogin);

route.post("/logout", verifySessionToken, PostLogout);

route.post("/register", upload.single('profil'),PostRegister);

route.post("/forgotPassword", PostForgotPassword);

route.post("/resetPassword", PostResetPassword);

module.exports = route;
