const db = require("../models/"); // Assurez-vous d'importer correctement vos modèles

const createCotation = async (req, res, next) => {
  const {startDate,description, duree, userId} = req.body;
  const {produits} = req.body;

  console.log(produits);

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
