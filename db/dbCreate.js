var pgtools = require('pgtools');
const { config, DB_NAME } = require('./dbConfig');

// create the database
pgtools.createdb(config, DB_NAME, function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(`Database '${DB_NAME}' created.`);
});
