'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize) => {
  const population = sequelize.define('population', {

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
        key: "id",
      }
    },
    total_population: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid population"
        },
        notEmpty: {
          msg: "Population cannot be empty"
        },
      },
    },
    male_population: {
      type: DataTypes.BIGINT,
      allowNull: true,

    },
    female_population: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    population_estimate_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid year"
        },
        notEmpty: {
          msg: "Year cannot be empty"
        },
      },
    },
    female_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    male_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    total_comparison_ranking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid ranking"
        },
        notEmpty: {
          msg: "Ranking cannot be empty"
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,

    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }

  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'population',
  })

  population.associate = (models) => {

    population.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
    });


    population.hasMany(models.nationality, {
      foreignKey: 'population_id',
      as: 'nationality'
    });

    population.hasMany(models.language_religion, {
      foreignKey: 'population_id',
      as: 'language_religion'
    });

    population.hasMany(models.age_structure, {
      foreignKey: 'population_id',
      as: 'age_structure'
    })

    population.hasMany(models.dependency_ratio, {
      foreignKey: 'population_id',
      as: 'dependency_ratio'
    });

    population.hasMany(models.population_rate,{
      foreignKey: 'population_id',
      as: 'population_rate_Data'
    });

    population.hasMany(models.urbanization,{
      foreignKey: 'population_id',
      as: 'urbanization_Data'
    });

    population.hasMany(models.sex_marriage,{
      foreignKey: 'population_id',
      as: 'sex_marriage_Data'
    });

    population.hasMany(models.health_data,{
      foreignKey: 'population_id',
      as: 'health_data'
    });

    population.hasMany(models.education_data,{
      foreignKey: 'population_id',
      as: 'education_data'
    });



    
  };

      


  return population;

} 