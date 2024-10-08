'use strict';

const { DataTypes } = require("sequelize");

module.exports =(sequelize)=>{
  const transnational_issues = sequelize.define('transnational_issues', {
          id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: 'country',
          key: 'id'
        }
      },
      refugees_IDPs:{
        type: DataTypes.JSONB,
        allowNull:true,
      },
      illicit_drugs:{
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
      deletedAt:{
        type:DataTypes.DATE,
      }
  },{
    paranoid:true,
    freezeTableName:true,
    tableName: 'transnational_issues'
  })


  transnational_issues.associate=(models)=>{
    transnational_issues.belongsTo(models.country,{
      foreignKey:'country_id',
      onDelete:'CASCADE'
    })
  }


  return transnational_issues;
}