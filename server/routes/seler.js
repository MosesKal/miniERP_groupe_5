const express = require("express");
const path = require("path");
const uploadImageProduit = require("../middleware/uploadImageProduit");
const {
  createProduct,
  createCategorie,
  getCotationDetails,
  getAllCotations
} = require("./../controllers/selerController");



const route = express.Router();
route.post("/createProduct", uploadImageProduit, createProduct);
route.post("/createCategorie", uploadImageProduit, createCategorie);
route.get("/getCotation/:cotationId", getCotationDetails);
route.get("/getAllCatations", getAllCotations);

route.use(
  "/imagesProduct",
  express.static(path.join(__dirname, "../imagesProduct"))
);

module.exports = route;
