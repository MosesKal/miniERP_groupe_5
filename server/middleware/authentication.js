const jwt = require("jsonwebtoken");
const user = require("../models/user");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res
        .status(200)
        .json({ success: false, message: "Error! Token was not provided." });
    }
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    // res.status(200).json({
    //   success: true,
    //   data: { userId: decodedToken.userId, email: decodedToken.email },
    // });
    next();
  } catch (e) {
    res.send("Merci de vous authentifier");
  }
};

const verifySessionToken = async (req, res, next) => {
  const { sessionToken } = req.headers; // Récupérer le token de session depuis les headers de la requête

  // Vérifier si le token de session existe
  if (!sessionToken) {
    return res.status(401).json({ error: "Token de session manquant" });
  }

  try {
    const user = await db.User.findOne({ where: { sessionToken } });

    // Vérifier si le token de session est valide
    if (!user) {
      return res.status(401).json({ error: "Session invalide" });
    }

    // Le token de session est valide, ajouter l'utilisateur à l'objet de requête
    req.user = user;

    // Passer au middleware suivant
    next();
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = { authentication, verifySessionToken };
