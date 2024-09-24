'use strict';

const { DataTypes } = require("sequelize");
 


module.exports =(sequelize)=>{
  const household_inco_expe_data = sequelize.define('household_inco_expe_data', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    economy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'economy',
        key: 'id'
      },
     validate: {
        notNull: {
          msg: "Please enter a valid economy id"
        },
        notEmpty: {
          msg: 'economy id cannot be empty'
        }
    },
  },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    average_household_expenditures:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    household_income_or_consumption_by_percentage_share:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    remittances:{
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
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'household_inco_expe_data'
  });
 
  household_inco_expe_data.associate = (models) => {
    household_inco_expe_data.belongsTo(models.economy, {
      foreignKey: 'economy_id',
      as: 'economy'
   
    });
  }


  return household_inco_expe_data;
}