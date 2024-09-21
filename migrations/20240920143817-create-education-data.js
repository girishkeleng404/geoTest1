'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('education_data', {
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
          model: 'country',
          key: "id"
        }
      },
      education_expenditure: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      literacy_rate: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      school_life_expectancy: {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('education_data');
  }
};