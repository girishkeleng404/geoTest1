'use strict';

const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {
  const age_structures = sequelize.define('age_structure', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    age_0_14: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid age for 0-14"
        },
        notEmpty: {
          msg: "Age cannot be empty  for 0-14"
        },
      },
    },
    age_15_64: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid age for 15-64"
        },
        notEmpty: {
          msg: "Age cannot be empty for 15-64"
        },
      },
    },
    age_65_plus: {
      type: DataTypes.TEXT,
      allowNull: true,
      
    },
    
    estimated_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  },
{
  parnoid: true,
  freezeTableName: true,
  tableName: 'age_structure'
});


  age_structures.associate = (models)=>{
    age_structures.belongsTo(models.population,{
      foreignKey: 'country_id',
      as: 'population'
    })
  }


  return age_structures;
}