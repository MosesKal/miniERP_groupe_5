const express = require("express");
const path = require("path");
const uploadImageProduit = require("../middleware/uploadImageProduit");
const {
  createProduct,
  createCategorie,
  getCotationDetails,
  getAllCotations,
  addStock,
  getAllStocksByUser
} = require("./../controllers/selerController");

const route = express.Router();
route.post("/createProduct", uploadImageProduit, createProduct);
route.post("/createCategorie", uploadImageProduit, createCategorie);
route.get("/getCotation/:cotationId", getCotationDetails);
route.get("/getAllCotations", getAllCotations);

//Stock

route.post("/addStock", addStock);
route.get("/getAllStocksByUser/:userId", getAllStocksByUser);

route.use(
  "/imagesProduct",
  express.static(path.join(__dirname, "../imagesProduct"))
);

module.exports = route;
