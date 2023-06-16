"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entreprise.hasMany(models.User);
      Entreprise.hasOne(models.Adresse);
    }
  }
  Entreprise.init(
    {
      logoEntreprise: DataTypes.STRING,
      nomEntreprise: DataTypes.STRING,
      descriptionEntreprise: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Entreprise",
    }
  );
  return Entreprise;
};
