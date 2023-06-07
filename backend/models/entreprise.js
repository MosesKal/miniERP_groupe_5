const Sequelize = require("sequelize");
const db = require("../configs/database");

const Entreprise = db.define("Entreprise", {
  logo: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
  nom: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Entreprise;
