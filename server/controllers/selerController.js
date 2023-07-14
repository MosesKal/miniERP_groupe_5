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

const getCotationDetails = async (req, res) => {
  try {
    const cotationId = req.params.cotationId;

    const cotation = await db.Cotations.findOne({
      where: { id: cotationId },
      include: [
        {
          model: db.User,
          include: [{ model: db.Entreprise, attributes: ['denomination', 'logoEntreprise', 'formeJuridique', 'Description'] }],
          attributes: ['email', 'telephone'],
        },
        {
          model: db.Produits,
          include: { model: db.categorie_produits, attributes: ['nom_categorie', 'illustration_categorie'] },
        },
      ],
    });

    if (!cotation) {
      return res.status(404).json({ error: "Cotation introuvable." });
    }

    const {
      date_debut,
      date_fin,
      duree_de_validation,
      description,
      User: { email, telephone, Entreprise },
      Produits,
    } = cotation;

    const cotationDetails = {
      email,
      telephone,
      entreprise: Entreprise.denomination,
      logoEntreprise: Entreprise.logoEntreprise,
      descriptionEntreprise: Entreprise.Description,
      formeJuridique: Entreprise.formeJuridique,
      date_debut,
      date_fin,
      duree_de_validation,
      description,
      produits: Produits.map((produit) => ({
        ...produit.toJSON(),
        nom_categorie: produit.categorie_produit.nom_categorie,
        illustration_categorie: produit.categorie_produit.illustration_categorie,
      })),
    };

    res.status(200).json(cotationDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des informations de la cotation." });
  }
};

const getAllCotations = async (req, res) => {
  try {
    const cotations = await db.Cotations.findAll({
      include: [
        {
          model: db.User,
          include: [
            {
              model: db.Entreprise,
              attributes: ['denomination', 'logoEntreprise', 'formeJuridique', 'Description'],
            },
          ],
          attributes: ['email', 'telephone'],
        },
        {
          model: db.Produits,
          include: { model: db.categorie_produits, attributes: ['nom_categorie', 'illustration_categorie'] },
        },
      ],
    });

    const cotationDetailsList = cotations.map((cotation) => {
      const {
        id,
        date_debut,
        date_fin,
        duree_de_validation,
        description,
        User: { email, telephone, Entreprise },
        Produits,
      } = cotation;

      const cotationDetails = {
        id,
        email,
        telephone,
        entreprise: Entreprise.denomination,
        logoEntreprise: Entreprise.logoEntreprise,
        descriptionEntreprise: Entreprise.Description,
        formeJuridique: Entreprise.formeJuridique,
        date_debut,
        date_fin,
        duree_de_validation,
        description,
        produits: Produits.map((produit) => ({
          ...produit.toJSON(),
          nom_categorie: produit.categorie_produit.nom_categorie,
          illustration_categorie: produit.categorie_produit.illustration_categorie,
        })),
      };

      return cotationDetails;
    });

    res.status(200).json(cotationDetailsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des cotations." });
  }
};


module.exports = { createProduct, createCategorie, getCotationDetails, getAllCotations };
