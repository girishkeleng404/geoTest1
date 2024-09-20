'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class health_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  health_data.init({
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'health_data',
  });
  return health_data;
};