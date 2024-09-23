'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agricultural_and_industrial_data', {
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
      agricultural_products:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      industries:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      industrial_production_growth_rate:{
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
    await queryInterface.dropTable('agricultural_and_industrial_data');
  }
};