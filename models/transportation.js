'use strict';

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const transportation = sequelize.define('transportation', {
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
      validate: {
        notNull: {
          msg: 'The value can not be Null'
        },
        notEmpty: {
          msg: 'Please enter a valid id'
        }
      }
    },
    pipelines: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    railway_total_length_km: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    railway_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roadway_length_total_km: {
      type: DataTypes.FLOAT,
    },
    roadway_comparison_ranking: {
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
      type: DataTypes.DATE,
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    TableName: 'transportation'
  })

  transportation.associate = (models) => {
    transportation.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return transportation;
}