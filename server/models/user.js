"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Cotations);
      User.hasMany(models.Client);
      User.hasMany(models.Stock);
      User.hasMany(models.depenses);
      User.belongsTo(models.Entreprise, {
        foreignKey: "entrepriseId",
      });
    }
  }
  User.init(
    {
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        entrepriseId: DataTypes.INTEGER,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "seler", "mining"),
        defaultValue: "admin",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // authTokens: [
      //   {
      //     type: String,
      //     required: true,
      //   },
      // ],
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
