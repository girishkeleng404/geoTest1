const bcrypt = require('bcrypt');


module.exports = {

  up: (queryInterface, Sequelize) => {


    const password = process.env.ADMIN_PASSWORD;
    const hashPassword = bcrypt.hashSync(password,10);


    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Admin',
        lastName: 'TheCreator',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};