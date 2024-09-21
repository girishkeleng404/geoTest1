'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize) => {
  const substance_use_data = sequelize.define('substance_use_data', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    population_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'population',
        key: 'id'
      },
      validate:{
        notNull:{
          msg: "Please enter a valid population id"
        },
        notEmpty:{
          msg: "population id cannot be empty"
        }
      }
    },
    alcohol_consumption_p_capita: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    tobacco_use_p_capita: {
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
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'substance_use_data'
  });

substance_use_data.associate=(models)=>{
  substance_use_data.belongsTo(models.population,{
    foreignKey:'population_id',
    as:'population'
  })
}

  return substance_use_data;
}