'use strict';

const { DataTypes } = require("sequelize");




module.exports = (sequelize) => {
  const economy = sequelize.define('economy', {
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
      validate: {
        notNull: {
          msg: "Please enter a valid country id"
        },
        notEmpty: {
          msg: 'country id cannot be empty'
        }
      }
    },
    overview: {
      type: DataTypes.TEXT
    },
    year: {
      type: DataTypes.INTEGER
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
  },
    {
      paranoid: true,
      freezeTableName: true,
      tableName: 'economy'
    });



  economy.associate = (models) => {
    economy.belongsTo(models.country, {
      foreignKey: 'country_id'
    });


    economy.hasMany(models.gdp_data, {
      foreignKey: 'economy_id',
      as: 'gdp_data'
    });


    economy.hasMany(models.agricultural_and_industrial_data, {
      foreignKey: 'economy_id',
      as: 'agricultural_and_industrial_data'

    });
    

    economy.hasMany(models.labor_market_data, {
      foreignKey: 'economy_id',
      as: 'labor_market_data'
    })

    economy.hasMany(models.household_inco_expe_data, {
      foreignKey: 'economy_id',
      as: 'household_inco_expe_data'
    })


  }


    return economy;

  }