'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dependency_ratio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      population_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'population',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      total_dependency_ratio: {
        type: Sequelize.FLOAT,
        allowNull: false,

      },
      youth_dependency_ratio: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      elderly_dependency_ratio: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      potential_support_ratio: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      dependency_estimated_year: {
        type: Sequelize.INTEGER,
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dependency_ratio');
  }
};