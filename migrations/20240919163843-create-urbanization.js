'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('urbanization', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      population_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'population',
          key: 'id',
        },
          onDelete: 'CASCADE', 
          onUpdate: 'CASCADE'
      },
      urban_population: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
     rate_of_urbanization: {
        type: Sequelize.TEXT,
        allowNull:true,
      },
      major_urban_areas_population: {
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
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('urbanization');
  }
};