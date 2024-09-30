'use strict';

const { DataTypes} = require("sequelize");


module.exports =(sequelize)=>{
    const military = sequelize.define('military',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          country_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
              model: 'country',
              key: 'id',
            }
      
          },
          military_overview:{
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_branches: {
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_expenditure:{
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_security_service_personnel_strength:{
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_equipment_inventories_and_acquisitions:{
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_service_age_and_obligation: {
            type: DataTypes.TEXT,
            allowNull:true,
          },
          military_deployment:{
            type: DataTypes.TEXT,
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
          deletedAt:{
            type: DataTypes.DATE,
          }
    },{
        paranoid: true,
        freezeTableName:true,
        TableName: 'military'
    });


    military.associate = (models)=>{
        military.belongsTo(models.country,{
            foreignKey: 'country_id',
            as: 'country'
        });
    }


    return military;
}