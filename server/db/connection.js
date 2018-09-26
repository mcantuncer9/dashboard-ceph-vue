const monk = require('monk');
const connectionString = 'localhost/cephInfo';
const db = monk(connectionString);

module.exports = db;
