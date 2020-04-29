const Client = require('pg').Client;
const { config, DB_NAME } = require('./dbConfig');

// seed the database
const client = new Client({
  ...config,
  database: DB_NAME,
});

client.connect();

// staff data from https://randomuser.me/
const seedQuery = `
INSERT INTO staff (name, email, phone, image) 
VALUES ('Stella Roberts', 'stella.roberts@example.com','(847)-954-3040', 'https://randomuser.me/api/portraits/women/56.jpg'),
('Viktor Kaya', 'viktor.kaya@example.com','(847)-954-3041', 'https://randomuser.me/api/portraits/men/70.jpg'),
('Necati Denkel', 'necati.denkel@example.com','(972)-120-4155', 'https://randomuser.me/api/portraits/men/73.jpg'),
('Kristen Ortiz', 'kristen.ortiz@example.com','(847)-954-3042', 'https://randomuser.me/api/portraits/women/44.jpg'),
('Stephanie Watkins', 'stephanie.watkins@example.com','(333)-501-7249', 'https://randomuser.me/api/portraits/women/20.jpg'),
('Raymond Brewer', 'raymond.brewer@example.com','(847)-954-3045', 'https://randomuser.me/api/portraits/men/87.jpg');
`;

client.query(seedQuery, (err, res) => {
  if (err) throw err;
  console.log(`Database ${DB_NAME} seeded.`);
  client.end();
});
