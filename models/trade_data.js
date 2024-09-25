'use strict';

const { DataTypes } = require("sequelize");



module.exports =(sequelize)=>{
  const trade_data = sequelize.define('trade_data',{
    
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
    exports_billion: {
      type: JSONB,
      allowNull: true
    },
    imports_billion: {
      type: JSONB,
      allowNull: true
    },
    exports_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imports_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    top_export_partners: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    top_import_partners: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    top_export_commodities: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    top_import_commodities: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    current_account_balance_billion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    reserves_of_foreign_exchange_gold_billion: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    tableName: 'trade_data'
  });
  

  trade_data.associate = (models) => {
    trade_data.belongsTo(models.economy, {
      foreignKey: 'economy_id'
    });
  }


  return trade_data;
}