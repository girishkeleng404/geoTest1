'use strict';

const { DataTypes, Model } = require("sequelize");



module.exports = (sequelize) => {

  const historical_bg = sequelize.define('historical_bg', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',

      validate: {
        notNull: {
          msg: "Please enter a valid country id"
        },
        notEmpty: {
          msg: 'Country id cannot be empty'
        }
      }

    },
    background_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid description"
        },
        notEmpty: {
          msg: 'The description cannot be empty'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },

  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'historical_bg'
  })



  historical_bg.associate = (models) => {
    historical_bg.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country', // alias for querying
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return historical_bg;

}