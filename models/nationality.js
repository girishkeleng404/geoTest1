'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
// const population = require("../models");



module.exports = (sequelize) => {
  const nationality = sequelize.define('nationality', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: "id",
      },

      validate: {
        notNull: {
          msg: "Please enter a valid country id"
        },
        notEmpty: {
          msg: 'Country id cannot be empty'
        }
      }
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid input"
        },
        notEmpty: {
          msg: "Empty value is not allowed"
        }
      },
    },
    ethnic_groups: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    population_distribution: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    demographic_profile: {
      type: DataTypes.TEXT,
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

  },
    {
      paranoid: true,
      freezeTableName: true,
      tableName: 'nationality'
    })

    nationality.associate =(models)=>{
      nationality.belongsTo(models.population,{
        foreignKey:'country_id',
        as: 'population'
      })
    }

  return nationality;
}