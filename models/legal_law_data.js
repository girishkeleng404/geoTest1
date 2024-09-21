'use strict';

const { DataTypes } = require("sequelize");
 


module.exports =(sequelize)=>{
  const legal_law_data = sequelize.define('legal_law_data',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    government_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
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
    legal_system: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    constitution:{
      type: DataTypes.JSONB,
      allowNull: true
    },
    international_law_organization_participation:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    citizenship:{
      type: DataTypes.JSONB,
      allowNull: true
    },
    suffrage:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    executive_branch:{
      type: DataTypes.JSONB,
      allowNull: true
    },
    legislative_branch:{
      type: DataTypes.JSONB,
      allowNull: true
    },
    judicial_branch:{
      type: DataTypes.JSONB,
      allowNull: true
    },
    
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt:{
      type: DataTypes.DATE
    }
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'legal_law_data'
  });

  legal_law_data.asociate=(models)=>{
    legal_law_data.belongsTo(models.government,{
      foreignKey: 'government_id',
      as: 'government'
    })
  }

  return legal_law_data;
}