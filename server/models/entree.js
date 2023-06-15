'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entree.init({
    qty: DataTypes.STRING,
    prix: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entree',
  });
  return Entree;
};