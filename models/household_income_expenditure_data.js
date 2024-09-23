'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const household_income_expenditure_data = sequelize.define('household_income_expenditure_data', {
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
    lowest_10_percent_income: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    highest_10_percent_income: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    household_expenditure_food: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    remittances: {
      type: DataTypes.JSONB,
    },

    household_expenditure_alcohol_tobacco: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.DATE,
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'household_income_expenditure_data'
  })


  household_income_expenditure_data.associate = (models) => {
    household_income_expenditure_data.belongsTo(models.economy, {
      foreignKey: 'economy_id',
      as: economy,
    })
  }


  return household_income_expenditure_data
}