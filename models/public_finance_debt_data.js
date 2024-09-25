'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports =(sequelize)=>{
  const public_finance_debt_data = sequelize.define('public_finance_debt_data',{
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
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    revenues_billion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    expenditures_billion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    public_debt_percentage_gdp: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    taxes_percentage_gdp: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    taxes_comparison_ranking: {
      type: DataTypes.INTEGER,
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
    tableName: 'public_finance_debt_data'
  });

  public_finance_debt_data.associate=(models)=>{
    public_finance_debt_data.belongsTo(models.economy,{
      foreignKey: 'econmoy_id'
    })
  }

  return public_finance_debt_data;
}