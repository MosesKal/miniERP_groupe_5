const { Cotations, User, Produits, Offres } = require('../models'); // Assurez-vous d'importer correctement vos modèles

const createCotation = async (req, res, next) => {
  const { description, status, duree_de_validation, userId } = req.body;

  try {

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        error: 'Utilisateur non trouvé.',
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


    const offre = await Offres.create({ /* ... */ }); 
    if (offre) {
      await cotation.setOffre(offre);
    }

    res.status(200).json({
      message: 'Cotation enregistrée avec succès.',
      cotation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de l'enregistrement de la cotation.",
    });
  }
};

module.exports = { createCotation };
