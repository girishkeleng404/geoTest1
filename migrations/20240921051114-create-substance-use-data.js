'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('substance_use_data', {
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
          model:'population',
          key:'id'
        },
         onDelete: 'CASCADE', 
          onUpdate: 'CASCADE'
      },
      alcohol_consumption_p_capita:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      tobacco_use_p_capita:{
        type: Sequelize.JSONB,
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
    await queryInterface.dropTable('substance_use_data');
  }
};