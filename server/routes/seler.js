const express = require("express");
const path = require("path");
const uploadImageProduit = require("../middleware/uploadImageProduit");
const {
  createProduct,
  createCategorie,
} = require("./../controllers/selerController");

/** middleware */


const route = express.Router();
route.post("/createProduct", uploadImageProduit, createProduct);
route.post("/createCategorie", uploadImageProduit, createCategorie);
route.use(
  "/imagesProduits",
  express.static(path.join(__dirname, "../imagesProduits"))
);

module.exports = route;
