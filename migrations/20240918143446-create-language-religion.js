'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('language_religion', {
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
      languages: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      major_language_sample: {
        type: Sequelize.TEXT,
        allowNull: true,

      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,

      },
      religions: {
        type: Sequelize.TEXT,
        allowNull: false,
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
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('language_religion');
  }
};