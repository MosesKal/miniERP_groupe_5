const db = require("../models/");

// POST CONTROLLEURS

const PostRegisterMining = async (req, res, next) => {
  const { nomEntreprise, description, logoEntreprise } = req.body;

  try {
    const IsEntreprise = await db.Entreprise.findOne({  // Utiliser "Entreprise" avec une majuscule
      where: { nomEntreprise },
    });
    if (IsEntreprise) {
      return res.status(400).json({
        error: "Cette entreprise a déjà été créée",
      });
    }
    const newEntreprise = await db.Entreprise.create({  // Utiliser "Entreprise" avec une majuscule
      nomEntreprise: nomEntreprise,
      descriptionEntreprise: description,
      logoEntreprise: logoEntreprise,
    });
    res.status(200).json({
      message: "Entreprise enregistrée avec succès",
      entreprise: newEntreprise,  // Utiliser "entreprise" en minuscules
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de l'enregistrement de l'entreprise",
    });
  }
};

module.exports = { PostRegisterMining };
