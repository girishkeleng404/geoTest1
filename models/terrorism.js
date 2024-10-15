'use strict';

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const terrorism = sequelize.define('terrorism', {
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
        key: 'id',
      },
      validate: {
        notNull: {
          msg: 'country id cannot be null',
        },
        notEmpty: {
          msg: 'please enter a valid id'
        }
      }
    },
    terrorist_groups: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
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
  }, {
    paranoid: true,
    freezeTabelName: true,
    tableName: 'terrorism'
  });


  terrorism.associate = (models) => {
    terrorism.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }


  return terrorism;
}