'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }.init({
    name: DataTypes.STRING,
    iso_code: DataTypes.STRING,
    capital: DataTypes.STRING,
    coastline_km: DataTypes.FLOAT,
    climate: DataTypes.TEXT
  }, {
    sequelize,
    modelName: '',
  });
  return;
};