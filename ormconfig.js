/* eslint-disable */

const config = require('config');
const databaseConfig = config.get('database');

module.exports = { ...databaseConfig };
