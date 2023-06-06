const Sequelize = require("sequelize");
const dotenv = require("dotenv");

/**CONFIGURATION */
dotenv.config();


module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_PILOTE,
  }
);
