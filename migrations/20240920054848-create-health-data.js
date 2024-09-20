'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('health_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'country',
          key: 'id',
        }
      },
      current_health_expenditure: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      life_expectancy: {
        type: DataTypes.JSONB, 
        allowNull: true
      },
      infant_mortality: {
        type: DataTypes.JSONB, 
        allowNull: true
      },
      maternal_mortality: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      physician_density: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      hospital_bed_density: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      drinking_water: {
        type: DataTypes.JSONB, 
        allowNull: true
      },
      sanitation: {
        type: DataTypes.JSONB, 
        allowNull: true
      },
      major_infectious_diseases: {
        type: DataTypes.JSONB, 
        allowNull: true
      },
      adult_obesity: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      underweight_children: {
        type: DataTypes.JSONB, 
        allowNull: true
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
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('health_data');
  }
};