const db = require("../models/"); // Assurez-vous d'importer correctement vos modèles

const createProduct = async (req, res, next) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "Aucun fichier n'a été inclus dans la requête." });
  }
  const photoProduit = `${req.protocol}://${req.get("host")}/imagesProduct/${
    req.file.filename
  }`;

  const { nom } = req.body;

  try {
    const produitExist = await db.Produits.findOne({
      where: { nom },
    });
    if (produitExist) {
      return res.status(400).json({
        error: "le produit existe.",
      });
    }

    const newProduit = await db.Produits.create({
      nom: nom,
      photo: photoProduit,
    });

    if (!newProduit) {
      return res.status(500).json({ error: "Échec de la création du produit" });
    }

    res.status(201).json({
      message: "Produit créé avec succès.",
      produit: newProduit,
    });
    //....
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Échec de la création du produit." });
    }
  }
};

module.exports = { createProduct };
