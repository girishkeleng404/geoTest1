'use strict';

const { DataTypes } = require("sequelize");
 

module.exports =(sequelize)=>{
  const labor_market_data = sequelize.define('labor_market_data',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    economy_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: 'economy',
        key: 'id'
      },
      validate:{
        notNull:{
          msg: "Please enter a valid economy id"
        },
          notEmpty:{
            msg: 'economy id cannot be empty'
          }
        }
    },
    labor_force_millions: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    labor_comparison_ranking:{
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    unemployment_rate:{
      type: DataTypes.JSONB,
      allowNull:true,
    },
    youth_unemployment_rate:{
      type: DataTypes.JSONB,
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
    paranoid: true,
    freezTableName: true,
    tableName: 'labor_market_data'
  });

   labor_market_data.associate =(models)=>{
    labor_market_data.belonsTo(models.economy,{
      foreignKey: 'economy_id',
      as: 'economy'
    })
   }

  return labor_market_data;
}