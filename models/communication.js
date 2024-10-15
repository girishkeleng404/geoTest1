'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const communication = sequelize.define('communication', {
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

    },
    telephone_subscription_in_millions: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    telephone_subscription_per_100: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mobile_subscription_in_millions: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mobile_subscription_per_100: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mobile_subscription_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    telecommunication_system: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    broadcast_media: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    internet_country_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    internet_users_in_millions: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    internet_users_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    internet_users_ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    broadband_subscription_in_millions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'communication',
  })


  communication.associate = (models) => {
    communication.belongsTo(models.country, {
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return communication;
}