'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transportation', {
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
      pipelines: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      railway_total_length_km: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      railway_comparison_ranking: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      roadway_length_total_km: {
        type: Sequelize.FLOAT,
      },
      roadway_comparison_ranking: {
        type: Sequelize.INTEGER,
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
      deletedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transportation');
  }
};