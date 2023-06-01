const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sequelizeTest", "moses", "moses", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((error) => {
    console.log("Error connecting to db!");
  });
