'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports =(sequelize)=>{
  const population_rate = sequelize.define('population_rate', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    population_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'population',
        key: 'id',
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
    population_growth_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    population_growth_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    birth_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    birth_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    death_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    death_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

   total_fertility_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    total_fertility_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gross_reproduction_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gross_reproduction_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    obesity_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    obesity_rate_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    net_migration_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    net_migration_rate_rank: {
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
    deletedAt:{
      type: DataTypes.DATE
    }
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'population_rate'
  });

  
  population_rate.associate =(models)=>{
    population_rate.belongsTo(models.population,{
      foreignKey: 'population_id',
      as: 'population'
    })
  }


  return population_rate;
}