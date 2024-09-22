'use strict';

const { DataTypes } = require("sequelize");


module.exports =(sequelize)=>{
   const government_more = sequelize.define('government_more',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    government_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'government',
        key: 'id'
      },
      validate:{
        notNull:{
          msg: "government_id cannot be null"
        },
        notEmpty:{
          msg:"Please enter a valid government_id"
        }
      }
    },
    judicial_branch: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    political_parties: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    international_organization_participation: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    diplomatic_representation: {
      type: DataTypes.JSONB,
      allowNull:true,
    },

    flag_description: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    national_symbol: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    national_anthem: {
      type: DataTypes.JSONB,
      allowNull:true,
    },
    national_heritage: {
      type: DataTypes.JSONB,
      allowNull:true,
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
   },{
    paranoid: true,
    freezeTableName: true,
    tabelName: 'government_more'
   });

   government_more.associate=(models)=>{
    government_more.belongsTo(models.government,{
      foreignKey: 'government_id',
      as: 'government'
    })
   }

   return government_more;
}