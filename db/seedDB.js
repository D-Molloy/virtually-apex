var pgtools = require('pgtools');
const Client = require('pg').Client;
const config = require('./dbConfig');
const DB_NAME = 'test_db2';

// create the database
pgtools.createdb(config, DB_NAME, function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  // seed the database
  const client = new Client({
    ...config,
    database: DB_NAME,
  });

  client.connect();

  client.query(seedQuery, (err, res) => {
    if (err) throw err;
    console.log(`Database ${DB_NAME} created and seeded.`);
    client.end();
  });
});

// staff data from https://randomuser.me/
const seedQuery = `
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  email VARCHAR(320) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL
);
CREATE TABLE staff(
  id SERIAL PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  image VARCHAR(100) NOT NULL
);
INSERT INTO staff (name, email, phone, image) 
VALUES ('Stella Roberts', 'stella.roberts@example.com','(847)-954-3040', 'https://randomuser.me/api/portraits/women/56.jpg'),
('Viktor Kaya', 'viktor.kaya@example.com','(847)-954-3041', 'https://randomuser.me/api/portraits/men/70.jpg'),
('Necati Denkel', 'necati.denkel@example.com','(972)-120-4155', 'https://randomuser.me/api/portraits/men/73.jpg'),
('Kristen Ortiz', 'kristen.ortiz@example.com','(847)-954-3042', 'https://randomuser.me/api/portraits/women/44.jpg'),
('Stephanie Watkins', 'stephanie.watkins@example.com','(333)-501-7249', 'https://randomuser.me/api/portraits/women/20.jpg'),
('Raymond Brewer', 'raymond.brewer@example.com','(847)-954-3045', 'https://randomuser.me/api/portraits/men/87.jpg');
`;
