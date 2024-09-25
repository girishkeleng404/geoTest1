'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('public_finance_debt_data', {

      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      economy_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'economy',
          key: 'id'
        },
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      revenues_billion: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      expenditures_billion: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      public_debt_percentage_gdp: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      taxes_percentage_gdp: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      taxes_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true
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
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('public_finance_debt_data');
  }
};