'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gdp_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      economy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'economy',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      gdp_purchasing_power_parity:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      gdp_real_growth_rate:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      gdp_per_capita:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      gdp_official_exchange_rate:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      infulation_rate:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      cadit_rating:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      gdp_composition_by_sector:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      gdp_composition_by_end_use:{
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
    await queryInterface.dropTable('gdp_data');
  }
};