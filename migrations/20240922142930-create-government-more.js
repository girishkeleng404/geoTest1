'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('government_mores', {
     
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      government_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'government',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      judicial_branch: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      political_parties: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      international_organization_participation: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      diplomatic_representation: {
        type: Sequelize.JSONB,
        allowNull:true,
      },

      flag_description: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      national_symbol: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      national_anthem: {
        type: Sequelize.JSONB,
        allowNull:true,
      },
      national_heritage: {
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
      deletedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('government_mores');
  }
};