'use strict';

const { DataTypes } = require("sequelize");





module.exports = (sequelize) => {
  const nationality = sequelize.define('nationality', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    population_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'population',
        key: "id",
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
    nationality: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid input"
        },
        notEmpty: {
          msg: "Empty value is not allowed"
        }
      },
    },
    ethnic_groups: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    population_distribution: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    demographic_profile: {
      type: DataTypes.TEXT,
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
      type: DataTypes.DATE,
    }

  },
    {
      paranoid: true,
      freezeTableName: true,
      tableName: 'nationality'
    });

  nationality.associate = (models) => {
    nationality.belongsTo(models.population, {
      foreignKey: 'population_id',
      as: 'population',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return nationality;
}