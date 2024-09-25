'use strict';

const { JSONB } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trade_data', {

    
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
        }
      },
      exports_billion: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      imports_billion: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      exports_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      imports_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      top_export_partners: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      top_import_partners: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      top_export_commodities: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      top_import_commodities: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      current_account_balance_billion: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      reserves_of_foreign_exchange_gold_billion: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('trade_data');
  }
};