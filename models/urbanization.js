'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize)=>{
  const urbanization = sequelize.define('urbanization', {
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
        model: 'population',
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
    urban_population: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Please enter a valid urban population"
        },
        notEmpty:{
          msg: "Urban population cannot be empty"
        }
      }
    },
   rate_of_urbanization: {
      type: DataTypes.TEXT,
      allowNull:true,
    },
    major_urban_areas_population: {
      type: DataTypes.TEXT,
      allowNull:true,
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
    paranoid:true,
    freezeTableName:true,
    tableName:'urbanization'
  
  })

  urbanization.associate = (models)=>{
    urbanization.belongsTo(models.population,{
      foreignKey: 'population_id',
      as: 'population'
    })
  }


  return urbanization;
}