'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('labor_market_data', {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      labor_force_millions: {
        type: Sequelize.FLOAT,
        allowNull:true,
      },
      labor_comparison_ranking:{
        type: Sequelize.INTEGER,
        allowNull:true,
      },
      unemployment_rate:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      youth_unemployment_rate:{
        type: Sequelize.JSONB,
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
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('labor_market_data');
  }
};