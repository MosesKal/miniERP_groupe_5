const express = require("express");
const path = require("path");
const uploadImageProduit = require("../middleware/uploadImageProduit");
const { createProduct } = require("./../controllers/selerController");

/** middleware */
const { verifySessionToken } = require("../middleware/authentication");

const route = express.Router();
route.post("/createProduct", uploadImageProduit, createProduct);
route.use(
  "/imagesProduits",
  express.static(path.join(__dirname, "../imagesProduits"))
);

module.exports = route;
