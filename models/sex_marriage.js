'use strict';

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const sex_marriage = sequelize.define('sex_marriage', {

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
      }
    },
    sex_ratio: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    mother_age_at_first_birth: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    currently_married_womens_15to52: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    women_married_by_age_15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    women_married_by_age_18: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    contraceptive_prevalence_rate: {
      type: DataTypes.STRING,
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
      allowNull: true
    }
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'sex_marriage'
  })

  sex_marriage.associate = (models)=>{
    sex_marriage.belongsTo(models.population, {foreignKey: 'country_id', as: 'population'})
  }


  return sex_marriage;

}