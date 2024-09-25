'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exchange_rate_external_debt_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      economy_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'economy',
          key: 'id'
        },
      },
      external_debt_billion:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      exchange_rate_inr_usd:{
        type: Sequelize.JSONB,
        allowNull: true,
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
    await queryInterface.dropTable('exchange_rate_external_debt_data');
  }
};