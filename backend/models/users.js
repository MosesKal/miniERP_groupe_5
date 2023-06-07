const Sequelize = require("sequelize");
const db = require("../configs/database");

const User = db.define("User", {
  prenom: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.DataTypes.ENUM("admin", "seler", "mining"),
    defaultValue: "admin",
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
