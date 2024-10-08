'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConfig");
// const User = require("./user");


module.exports = (sequelize) => {


  const country = sequelize.define('country', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid name'
        },
        notEmpty: {
          msg: "Name cannot be empty"
        },
      }
    },
    iso_code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid iso code'
        },
        notEmpty: {
          msg: "Iso code cannot be empty"
        },
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid capital'
        },
        notEmpty: {
          msg: "Capital cannot be empty"
        },
      }
    },
    countryImage: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid image'
        },
        notEmpty: {
          msg: "Product image cannot be empty"
        },
      }
    },
    coastline_km: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid coastline'
        },
        notEmpty: {
          msg: "Coastline cannot be empty"
        },
      }
    },
    climate: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid climate'
        },
        notEmpty: {
          msg: "Climate cannot be empty"
        },
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
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
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'country',
  })




  country.associate = (models) => {
    country.belongsTo(models.user, { foreignKey: 'createdBy', });

    country.hasMany(models.historical_bg, { foreignKey: 'country_id', as: 'history', });

    country.hasMany(models.population, { foreignKey: 'country_id', as: 'populationData', });

    country.hasMany(models.environment, {
      foreignKey: 'country_id',
      as: 'environment_data'
    });

    country.hasMany(models.government, {
      foreignKey: 'country_id',
      as: 'government_data'
    });

    country.hasMany(models.economy, {
      foreignKey: 'country_id',
      as: 'economy_data'
    });

    country.hasMany(models.energy,{
      foreignKey: 'country_id',
      as: 'energy_data',
    });


    country.hasMany(models.communication,{
      foreignKey: 'country_id',
      as: 'communication_data',
    });

    country.hasMany(models.transportation,{
      foreignKey: 'country_id',
      as: 'transportation_data'
    })

    country.hasMany(models.military,{
      foreignKey: 'country_id',
      as: 'military_data'
    });


    country.hasMany(models.space,{
      foreignKey: 'country_id',
      as: 'space_data'
    });

    country.hasMany(models.terrorism,{
      foreignKey: 'country_id',
      as: 'terrorism_data'
    });

    country.hasMany(models.transnational_issues,{
      foreignKey: 'country_id',
      as: 'transnational_issues_data'

    });



  }


  return country;


}
