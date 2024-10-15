'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const environment = sequelize.define('environment', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: 'id',
      },
      validate:{
        notNull:{
          msg: 'Please select a country'
        },
        notEmpty:{
          msg: 'Please select a country'
        }
      }
    },
    environment: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    land_use: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    natural_resource_revenue_data: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    pollution_waste_data: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    water_resources: {
      type: DataTypes.JSONB,
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'environment',
  });

  environment.associate = (models) => {
    environment.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }


  return environment;
}