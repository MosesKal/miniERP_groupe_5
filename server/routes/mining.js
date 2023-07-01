const express = require("express");
const {
  getDataMining,
  createCotation,
} = require("./../controllers/miningController");

const router = express.Router();

router.get("/getDataMining/:token", getDataMining);

router.post("/createCotation", createCotation);

module.exports = router;
