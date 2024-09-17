// const user = require('./user');
// const country = require('./country');

 

 

// // Define associations
// user.hasMany(country, { foreignKey: 'createdBy', onDelete: 'CASCADE', });
// country.belongsTo(user, { foreignKey: 'createdBy', onDelete: 'CASCADE', });

// module.exports = { user, country };


// const { user, country } = require('./index'); // Import models from index.js

// // Define associations
// user.hasMany(country, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
// country.belongsTo(user, { foreignKey: 'createdBy', onDelete: 'CASCADE' });

// module.exports = { user, country };

module.exports = (db) => {
    const { user, country,historical_bg } = db;
  
    // Define associations here
    user.hasMany(country);
    country.belongsTo(user);
    country.hasMany(historical_bg)
  };
  