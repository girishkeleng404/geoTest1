'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize) => {
  const dependency_ratio = sequelize.define('dependency_ratio', {
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
        key: 'id'
      }
    },
    total_dependency_ratio: {
      type: DataTypes.FLOAT,
      allowNull: false,

    },
    youth_dependency_ratio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    elderly_dependency_ratio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    potential_support_ratio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dependency_estimated_year: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.DATE
    }
  },
    {
      paranoid: true,
      freezeTableName: true,
      tableName: 'dependency_ratio'
    });


    dependency_ratio.associate = (models) => {
      dependency_ratio.belongsTo(models.population, {
        foreignKey: 'country_id',
        as: 'population',
    
      });
    };

  return dependency_ratio;
}