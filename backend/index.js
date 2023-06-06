const bcrypt = require('bcrypt');
const express = require('express');
const express_session = require("express-session");
const passport = require("passport");
const passport_local = require("passport-local");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./configs/database");


const adminRoutes = require('./routes/admin');
const generalRoutes = require('./routes/generals');
const miningRoutes = require('./routes/mining');
const sellerRoutes = require('./routes/seller');


/** CONFIGURATIONS */

const app = express();

db
  .authenticate()
  .then((data) => {
    console.log("Connexion réussie");
  })
  .catch((error) => {
    console.log("Echec de connexion");
  });

/** ROUTES */

app.use("/seller", sellerRoutes);
app.use("/admin", adminRoutes);
app.use("/mining", miningRoutes);
app.use("/general", generalRoutes);
