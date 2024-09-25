'use strict';

const { DataTypes } = require("sequelize");



module.exports =(sequelize)=>{
  const exchange_rate_external_debt_data = sequelize.define('exchange_rate_external_debt_data',{
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
          msg: 'economy_id cannot be null'
        },
        notEmpty:{
          msg: 'please enter a valid economy_id'
        }
      }
    },
    external_debt_billion:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    exchange_rate_inr_usd:{
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
    deletedAt:{
      type: DataTypes.DATE,
    }
  },{
    paranoid: true,
    freezeTableName: true,
    tableName:'exchange_rate_external_debt_data'
  });

  exchange_rate_external_debt_data.associate =(models)=>{
    exchange_rate_external_debt_data.belongsTo(models.economy, {
      foreignKey: 'economy_id'
    });
  }

  return exchange_rate_external_debt_data;
}