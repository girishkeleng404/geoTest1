'use strict';

const { DataTypes } = require("sequelize");




module.exports = (sequelize) => {
  const language_religion = sequelize.define('language_religion', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    country_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'country',
        key: 'id'
      }
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    major_language_sample: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    religions: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'language_religion',
  }
  )


  return language_religion;
}