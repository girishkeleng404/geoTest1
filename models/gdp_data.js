'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const gdp_data = sequelize.define('gdp_data', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    economy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'economy',
        key: 'id'
      },
      validate: {
        notNull: {
          msg: "Please enter a valid economy id"
        },
        notEmpty: {
          msg: 'economy id cannot be empty'
        }
      }
    },
    gdp_purchasing_power_parity: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    gdp_real_growth_rate: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    gdp_per_capita: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    gdp_official_exchange_rate: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    infulation_rate: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    cadit_rating: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    gdp_composition_by_sector: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    gdp_composition_by_end_use: {
      type: DataTypes.JSONB,
      allowNull: true,
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
    tableName: 'gdp_data'
  });


  gdp_data.associate = (models) => {
    gdp_data.belongsTo(models.economy, {
      foreignKey: 'economy_id',
      as: 'economy',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return gdp_data;
}