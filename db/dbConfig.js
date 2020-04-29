// Update the following values to connect to your PostgreSQL server
const config = {
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
};

// DB name used for creating DB and connections
const DB_NAME = 'virtually_apex';

module.exports = {
  config,
  DB_NAME,
};
