const express = require("express");
const {} = require("./../controllers/miningController");

/**controlleurs */

/**middlewares */

const route = express.Router();

/**fichiers statiques */

/**Routes  profil utilisateur*/

route.get("/profil", verifySessionToken, () => {
  const { user } = req;
  res.json({ user });
});

/**Routes demande de cotations */

route.post("/createCotation", (req, res, next) => {});

route.get("/offre", (req, res, next) => {});

/**Routes articles*/

route.get("/getArticle", (req, res, next) => {});
route.get("/getArticles", (req, res, next) => {});
