'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize) => {
  const depandency_ratio = sequelize.define('depandency_ratio', {
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
        model: 'population',
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
      tableName: 'depandency_ratio'
    });


    depandency_ratio.associate = (models) => {
      depandency_ratio.belongsTo(models.population, {
        foreignKey: 'country_id',
        as: 'population',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    };

  return depandency_ratio;
}