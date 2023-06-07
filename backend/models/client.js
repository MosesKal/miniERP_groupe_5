const Sequelize = require("sequelize");
const db = require("../configs/database");

const Client = db.define("Client", {
  date: {
    type: Sequelize.DataTypes.DATE,
    allowNull: false,
  },
  nom: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Client;
