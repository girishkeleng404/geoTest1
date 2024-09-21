'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('government', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'country',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      government_type: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      country_name: {
        type: Sequelize.JSONB,
        allowNull: false,

      },
      capital: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      administrative_divisions:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      independence:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      national_holiday:{
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
      deletedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('government');
  }
};