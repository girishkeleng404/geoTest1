'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('population_rate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'country',
          key: 'id',
        }
      },
      population_growth_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      population_growth_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      birth_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      birth_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      death_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      death_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

     total_fertility_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      total_fertility_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gross_reproduction_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      gross_reproduction_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      obesity_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      obesity_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      net_migration_rate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      net_migration_rate_rank: {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('population_rate');
  }
};