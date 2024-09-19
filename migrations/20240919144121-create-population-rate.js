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
        allowNull: true,
      },
      population_growth_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      birth_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      birth_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      death_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      death_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

     total_fertility_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      total_fertility_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      gross_reproduction_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      gross_reproduction_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      obesity_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      obesity_rate_rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      net_migration_rate: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      net_migration_rate_rank: {
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
      deletedAt:{
        type:Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('population_rate');
  }
};