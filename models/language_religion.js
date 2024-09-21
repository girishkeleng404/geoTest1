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
    population_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'population',
        key: 'id'
      },
      validate:{
        notNull:{
          msg: "Please enter a valid population id"
        },
        notEmpty:{
          msg:'population id cannot be empty'
        }
      }
    },
    languages: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:{
          msg:"Please enter a valid language"
        },
        notEmpty:{
          msg: 'The language cannot be empty'
        }
      }
    },
    major_language_sample: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    religions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:{
          msg:"Please enter a valid religion"
        },
        notEmpty:{
          msg: 'The religion cannot be empty'
        }
      }
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


  language_religion.associate = (models)=>{
    language_religion.belongsTo(models.population,{
      foreignKey: 'population_id',
      as: 'population'
    })
  }


  return language_religion;
}