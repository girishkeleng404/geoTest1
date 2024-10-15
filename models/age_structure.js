'use strict';

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const age_structure = sequelize.define('age_structure', {
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
        key: 'id'
      },
      validate: {
        notNull: {
          msg: "Please enter a valid population id"
        },
        notEmpty: {
          msg: 'Population id cannot be empty'
        }
      }
    },
    age_0_14: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age_15_64: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age_65_plus: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estimated_year: {
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
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'age_structure'
  });

  age_structure.associate = (models) => {
    age_structure.belongsTo(models.population, {
      foreignKey: 'population_id', // Link to population
      as: 'population', // Alias for easier querying
      onDelete: 'CASCADE', // Enable cascade delete
      onUpdate: 'CASCADE' // Optional: Cascade on update
    });
  };

  return age_structure;
}
