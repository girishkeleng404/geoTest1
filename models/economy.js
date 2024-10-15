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
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });


    economy.hasMany(models.gdp_data, {
      foreignKey: 'economy_id',
      as: 'gdp_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });


    economy.hasMany(models.agricultural_and_industrial_data, {
      foreignKey: 'economy_id',
      as: 'agricultural_and_industrial_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });


    economy.hasMany(models.labor_market_data, {
      foreignKey: 'economy_id',
      as: 'labor_market_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    economy.hasMany(models.household_inco_expe_data, {
      foreignKey: 'economy_id',
      as: 'household_inco_expe_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    economy.hasMany(models.public_finance_debt_data, {
      foreignKey: 'economy_id',
      as: 'public_finance_debt_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    economy.hasMany(models.trade_data, {
      foreignKey: 'economy_id',
      as: 'trade_data',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    economy.hasMany(models.debt_ext_exchange_rate, {
      foreignKey: 'economy_id',
      as: 'debt_ext_exchange_rate',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }


  return economy;

}