'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('population', {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      total_population: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      male_population: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      female_population: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      population_estimate_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      female_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      male_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_comparison_ranking: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('population');
  }
};