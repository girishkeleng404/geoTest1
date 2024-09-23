'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('household_income_expenditure_data', {
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
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lowest_10_percent_income:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      highest_10_percent_income:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      household_expenditure_food: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      remittances:{
        type: Sequelize.JSONB,
      },

      household_expenditure_alcohol_tobacco: {
        type: Sequelize.FLOAT,
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
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('household_income_expenditure_data');
  }
};