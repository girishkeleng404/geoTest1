'use strict';

const { DataTypes, Model } = require("sequelize");
const { sequelize, country } = require(".");


module.exports = (sequelize) => {

  const historical_bg = sequelize.define('historical-bg', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    country_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'country',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    background_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
 
  },{
    paranoid: true,
    freezeTableName: true,
    tableName:'historical_bg'
  })



  historical_bg.associate = (models)=>{
    historical_bg.belongsTo(models.country,{
    foreignKey: 'country_id',
   })
  }
   
 return historical_bg;

}