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
      allowNull: false,
      references: {
        model: 'country',
        key: 'id'
      },
      validate:{
        notNull:{
          msg: "Please enter a valid country id"
        },
        notEmpty:{
          msg:'Country id cannot be empty'
        }
      }
    },
    languages: {
      type: DataTypes.STRING,
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
      foreignKey: 'country_id',
      as: 'population'
    })
  }


  return language_religion;
}