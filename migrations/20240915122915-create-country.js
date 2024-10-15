'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('country', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iso_code: {
        type:Sequelize.STRING(2),
        allowNull: false,
      },
      capital: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryImage: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      coastline_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      climate: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate:  'CASCADE'
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
    await queryInterface.dropTable('country');
  }
};