const db = require("../models/"); // Assurez-vous d'importer correctement vos modèles

const createCotation = async (req, res, next) => {
  const { description, status, duree_de_validation, userId } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        error: "Utilisateur non trouvé.",
      });
    }

    const currentDate = new Date();

    const cotation = await Cotations.create({
      date: currentDate.toISOString(),
      description,
      status,
      duree_de_validation,
      userId,
    });

    const produit = await Produits.findByPk(1);
    if (produit) {
      await cotation.addProduit(produit);
    }
    

    const offre = await Offres.create({
      /* ... */
    });
    if (offre) {
      await cotation.setOffre(offre);
    }

    res.status(200).json({
      message: "Cotation enregistrée avec succès.",
      cotation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Une erreur est survenue lors de l'enregistrement de la cotation.",
    });
  }
};

const getDataMining = async (req, res) => {
  try {
    const { token } = req.params;

    const userData = await db.User.findOne({
      include: [
        {
          model: db.Entreprise,
          attributes: [
            "id",
            "denomination",
            "logoEntreprise",
            "formeJuridique",
            "Description",
          ],
          include: [
            {
              model: db.Adresse,
              attributes: ["id", "province", "ville", "avenue"],
            },
          ],
        },
      ],
      where: {
        Tokens: token,
      },
    });

    if (!userData) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json({ userData });
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de mining :",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = { createCotation, getDataMining };
