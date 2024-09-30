'use strict';

const { FLOAT } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('military', {
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
          model: 'country',
          key: 'id',
        }

      },
      military_overview:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      military_branches: {
        type: Sequelize.TEXT,
        allowNull:true,
      },
      military_expenditure_of_GDP_percentage:{
        type: Sequelize.FLOAT,
        allowNull:true,
      },
      military_security_service_personnel_strength:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      military_equipment_inventories_and_acquisitions:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      military_service_age_and_obligation: {
        type: Sequelize.TEXT,
        allowNull:true,
      },
      military_deployment:{
        type: Sequelize.TEXT,
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
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('military');
  }
};