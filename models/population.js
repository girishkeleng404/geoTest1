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
      foreignKey: 'country_id',
      as: 'nationality'
    });

    population.hasMany(models.language_religion, {
      foreignKey: 'country_id',
      as: 'language_religion'
    });

    population.hasMany(models.age_structure, {
      foreignKey: 'country_id',
      as: 'age_structure'
    })

  };
   population.associate = (models) => {
    population.hasOne(models.depandency_ratio, {
      foreignKey: 'country_id',
      as: 'depandency_ratio'
    });
  }

  
  return population;

} 