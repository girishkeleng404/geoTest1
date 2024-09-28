'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('communications', {
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
        onDelete:CASCADE,
        onUpdate:CASCADE,
      },
      telephone_subscription_in_millions:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      telephone_subscription_per_100:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mobile_subscription_in_millions:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mobile_subscription_per_100:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mobile_subscription_ranking:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      telecommunication_system:{
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      broadcast_media:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      internet_country_code:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      internet_users_in_millions:{
        type: Sequelize.FLOAT,
        allowNull:true,
      },
      internet_users_percentage:{
        type: Sequelize.FLOAT,
        allowNull:true,
      },
      internet_users_ranking:{
        type: Sequelize.INTEGER,
        allowNull:true,
      },
      broadband_subscription_in_millions:{
        type: Sequelize.STRING,
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
        allowNull:true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('communications');
  }
};