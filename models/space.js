'use strict';

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const space = sequelize.define('space', {
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
          msg: 'The value can not be null'
        },
        notEmpty: {
          msg: 'Please enter a valid id'
        }
      }
    },

    space_program_overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    space_agencies: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    space_launch_site: {
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
    freezeTableName: true,
    TableName: 'space'
  });


  space.associate = (models) => {
    space.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }


  return space;
}