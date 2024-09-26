'use strict';

const { DataTypes } = require("sequelize");


module.exports =(sequelize)=>{
  const debt_ext_exchange_rate = sequelize.define('debt_ext_exchange_rate',{

     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      economy_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: 'economy',
          key: 'id'
        },
        validate: {
          notNull: {
            msg: "Please enter a valid economy id"
          },
          notEmpty: {
            msg: 'economy id cannot be empty'
          }
        }
      },
      debt_external_billion_usd: {
        type: DataTypes.JSONB,
        allowNull:true,
      },
      exchange_rate: {
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
        type: DataTypes.DATE
      }
  },{
    paranoid: true,
    freezeTableName: true,
    tableName: 'debt_ext_exchange_rate'
  });
  

  debt_ext_exchange_rate.associate = (models) => {
    debt_ext_exchange_rate.belongsTo(models.economy, {
      foreignKey: 'economy_id',
      as: 'economy'
    });
  };


  return debt_ext_exchange_rate;
}