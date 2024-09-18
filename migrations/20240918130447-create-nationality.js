'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nationalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'country',
          key: 'id'
        }
      },
      nationality: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      ethnic_groups:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      population_distribution:{
         type:Sequelize.TEXT,
         allowNull:true,
      },
      demographic_profile:{
        type:Sequelize.TEXT,
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
    await queryInterface.dropTable('nationalities');
  }
};