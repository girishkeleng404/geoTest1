'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language_religion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  language_religion.init({
    languages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'language_religion',
  });
  return language_religion;
};