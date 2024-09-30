'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('space', {
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
          key: 'id'
        }
      },

      space_program_overview:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      space_agencies:{
        type:Sequelize.TEXT,
        allowNull:true,
      },
      space_launch_site:{
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
        type:Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('space');
  }
};