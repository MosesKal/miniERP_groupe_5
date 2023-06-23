"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {

    static associate(models) {
      // define association here
      Entreprise.hasMany(models.User);
      Entreprise.hasOne(models.Adresse);
    }

  }
  Entreprise.init(
    {
      logoEntreprise: DataTypes.STRING,
      denomination: DataTypes.STRING,
      descriptionEntreprise: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Entreprise",
    }
  );
  return Entreprise;
};
