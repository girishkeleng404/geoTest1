'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports =(sequelize)=>{
  const energy = sequelize.define('energy',{
          id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'country',
          key: 'id',
        }


      },
      energy_consumption_per_capita_in_million:{
        type:DataTypes.FLOAT,
        allowNull:true,
      },
      electricity_access:{
        type: DataTypes.JSONB,
        allowNull:true,
      },
      Electricity:{
        type:DataTypes.JSONB,
        allowNull:false,
      },
      electricity_generation_sources:{
        allowNull:true,
      },
      nuclear_energy:{
        type:DataTypes.JSONB,
        allowNull:true,
      },
      coal:{
        type:DataTypes.JSONB,
        allowNull:true,
      },
      petroleum:{
        type:DataTypes.JSONB,
        allowNull:true,
      },
      natural_gas:{
        type:DataTypes.JSONB,
        allowNull:true,
      },
      carbon_dioxide_emission:{
        type:DataTypes.JSONB,
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
        type:DataTypes.DATE,
      }
  })
}