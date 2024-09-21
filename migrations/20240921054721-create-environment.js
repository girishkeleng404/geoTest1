'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('environment', {
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
        },
         onDelete: 'CASCADE', 
          onUpdate: 'CASCADE'
      },
      environment:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      land_use:{
        type: Sequelize.JSONB,
        allowNull:true
      },
      natural_resource_revenue_data:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      pollution_waste_data:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      water_resources:{
        type:Sequelize.JSONB,
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
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('environment');
  }
};