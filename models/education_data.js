'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const education_data = sequelize.define('education_data', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: "id"
      },
      validate: {
        notNull: {
          msg: "Please enter a valid country id"
        },
        notEmpty: {
          msg: 'Country id cannot be empty'
        }
      }
    },
    education_expenditure: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    literacy_rate: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    school_life_expectancy: {
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
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'education_data'
  })

  education_data.associate = (models) => {
    education_data.belongsTo(models.population, {
      foreignKey: 'country_id',
      as: 'population'
    })
  }

  return education_data;
}