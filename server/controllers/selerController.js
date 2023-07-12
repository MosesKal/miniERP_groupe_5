const db = require("../models/"); // Assurez-vous d'importer correctement vos modèles

const createProduct = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "Aucun fichier n'a été inclus dans la requête." });
  }
  
  const photoProduit = `${req.protocol}://${req.get("host")}/imagesProduct/${
    req.file.filename
  }`;

  const { nom, categorieId } = req.body;
  
  const date = new Date();

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
      date : date.toLocaleDateString(),
      categorieId
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

const createCategorie = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "Aucun fichier n'a été inclus dans la requête." });
  }
  const imageCategorie = `${req.protocol}://${req.get("host")}/imagesProduct/${
    req.file.filename
  }`;

  const { nom } = req.body;

  try {
    const categorieExist = await db.categorie_produits.findOne({
      where: { nom_categorie : nom },
    });
    if (categorieExist) {
      return res.status(400).json({
        error: "la catégorie existe.",
      });
    }

    const newCategorie = await db.categorie_produits.create({
      nom_categorie: nom,
      illustration_categorie: imageCategorie,
    });

    if (!newCategorie) {
      return res
        .status(500)
        .json({ error: "Échec de la création de la catégorie" });
    }

    res.status(201).json({
      message: "Catégorie créée avec succès.",
      categorie: newCategorie,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Échec de la création de la catégorie." });
    }
  }
};

module.exports = { createProduct, createCategorie };
