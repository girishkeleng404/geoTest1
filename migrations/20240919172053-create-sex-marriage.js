'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sex_marriage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'country',
          key: 'id'
        }
      },
      sex_ratio:{
        type:Sequelize.TEXT,
        allowNull:false,

      },
      mother_age_at_first_birth:{
        type:Sequelize.TEXT,
        allowNull:false,

      },
      currently_married_womens_15to52:{
       type:Sequelize.TEXT,
       allowNull:true,
      },
      women_married_by_age_15:{
       type:Sequelize.STRING,
       allowNull:true,
      },
      women_married_by_age_18:{
       type:Sequelize.STRING,
       allowNull:true,
      },

      contraceptive_prevalence_rate:{
        type:Sequelize.STRING,
        allowNull:true,
        },
      

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type:Sequelize.DATE,
        allowNull:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sex_marriage');
  }
};