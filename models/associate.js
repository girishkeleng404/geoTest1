const user = require('./user');
const country = require('./country');

// Define associations
user.hasMany(country, { foreignKey: 'createdBy', onDelete: 'CASCADE', });
country.belongsTo(user, { foreignKey: 'createdBy', onDelete: 'CASCADE', });

module.exports = { user, country };
