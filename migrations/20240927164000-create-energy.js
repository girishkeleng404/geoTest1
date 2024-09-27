'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Energy', {
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
      energy_consumption_per_capita_in_million:{
        type:Sequelize.FLOAT,
        allowNull:true,
      },
      electricity_access:{
        type: Sequelize.JSONB,
        allowNull:true,
      },
      Electricity:{
        type:Sequelize.JSONB,
        allowNull:false,
      },
      electricity_generation_sources:{
        allowNull:true,
      },
      nuclear_energy:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      coal:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      petroleum:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      natural_gas:{
        type:Sequelize.JSONB,
        allowNull:true,
      },
      carbon_dioxide_emission:{
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
        type:Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Energy');
  }
};