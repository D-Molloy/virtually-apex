const Client = require('pg').Client;
const { config, DB_NAME } = require('./dbConfig');

// API DB Connection
const connection = new Client({
  ...config,
  database: DB_NAME,
});

connection.connect();

module.exports = connection;
