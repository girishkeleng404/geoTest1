'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('legal_law_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      government_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'government',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      legal_system: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      constitution:{
        type: Sequelize.JSONB,
        allowNull: true
      },
      international_law_organization_participation:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      citizenship:{
        type: Sequelize.JSONB,
        allowNull: true
      },
      suffrage:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      executive_branch:{
        type: Sequelize.JSONB,
        allowNull: true
      },
      legislative_branch:{
        type: Sequelize.JSONB,
        allowNull: true
      },
      judicial_branch:{
        type: Sequelize.JSONB,
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
      deletedAt:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('legal_law_data');
  }
};