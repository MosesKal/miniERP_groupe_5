"use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Produits extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Produits.init(
//     {
//       sku: DataTypes.STRING,
//       date: DataTypes.STRING,
//       statut: DataTypes.STRING,
//       photo: DataTypes.TEXT,
//       categorie: DataTypes.TEXT,
//     },
//     {
//       sequelize,
//       modelName: "Produits",
//     }
//   );
//   return Produits;
// };

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Produits extends Model {
    static associate(models) {
      Produits.belongsTo(models.categorie_produits, {
        foreignKey: "categorieId",
      });
    }
  }

  Produits.init(
    {
      sku: DataTypes.STRING,
      date: DataTypes.STRING,
      statut: DataTypes.STRING,
      photo: DataTypes.TEXT,
      categorieId: DataTypes.INTEGER, // Ajoutez la colonne pour la clé étrangère
    },
    {
      sequelize,
      modelName: "Produits",
    }
  );

  return Produits;
};
