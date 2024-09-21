'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize)=>{
  const government = sequelize.define('government',{
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
    government_type: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Please enter a valid government type'
        },
        notEmpty:{
          'msg': 'Government type cannot be empty'
        }
      }
    },
    country_name: {
      type: DataTypes.JSONB,
      allowNull: false,

    },
    capital: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    administrative_divisions:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    independence:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    national_holiday:{
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
    },
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'government'
  });

   government.associate=(models)=>{
    government.belongsTo(models.country,{
      foreignKey: 'country_id',
      as: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
   }

  return government;
}