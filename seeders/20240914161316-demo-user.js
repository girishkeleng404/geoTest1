const bcrypt = require('bcrypt');


module.exports = {

  up: (queryInterface, Sequelize) => {


    const password = process.env.ADMIN_PASSWORD;
    const hashPassword = bcrypt.hashSync(password,10);


    return queryInterface.bulkInsert('user', [
      {
        firstName: 'Admin',
        lastName: 'TheCreator',
        email: process.env.ADMIN_EMAIL,
        password:hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  },
};