'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports =(sequelize)=>{
  const agricultural_and_industrial_data = sequelize.define('agricultural_and_industrial_data',{
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
      },

    },
   
    agricultural_products:{
      type: DataTypes.JSONB,
      allowNull:true,
    },
    industries:{
      type: DataTypes.TEXT,
      allowNull:true,
    },
    industrial_production_growth_rate:{
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
    paramoid: true,
    freezeTableName: true,
    tableName: 'agricultural_and_industrial_data'
  })


 agricultural_and_industrial_data.associate = (models) => {
    agricultural_and_industrial_data.belongsTo(models.economy, {
      foreignKey: 'economy_id',
      as: 'economy'
    });
 }

  return agricultural_and_industrial_data;
}