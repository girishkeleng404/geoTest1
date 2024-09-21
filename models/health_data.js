'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize)=>{
  const health_data = sequelize.define('health_data', {
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
        key: 'id',
      },
      validate: {
        notNull: {
          msg: "Please enter a valid population id"
        },
        notEmpty: {
          msg: 'population id cannot be empty'
        }
      }
    },
    current_health_expenditure: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    life_expectancy: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    infant_mortality: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    maternal_mortality: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    physician_density: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hospital_bed_density: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drinking_water: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    sanitation: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    major_infectious_diseases: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    adult_obesity: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    underweight_children: {
      type: DataTypes.JSONB, 
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
    deletedAt: {
      type: DataTypes.DATE,
    }
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'health_data',
  })


  health_data.associate = (models)=>{
    health_data.belongsTo(models.population,{
      foreignKey: 'population_id',
      as: 'population'
    })
  }


  return health_data;
}