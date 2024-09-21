'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nationality', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      population_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'population',
          key: 'id'
        },
          onDelete: 'CASCADE', 
          onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('nationality');
  }
};