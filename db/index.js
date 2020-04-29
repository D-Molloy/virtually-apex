const connection = require('./dbConnection');

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }
  // Find all data
  getAllUsers() {
    return this.connection.query('SELECT * FROM users;');
  }
  findUser(email) {
    return this.connection.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
  }
  createUser({ name, email, phone, password }) {
    return this.connection.query(
      'INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)',
      [name, email, phone, password]
    );
  }
  getAllStaff() {
    return this.connection.query('SELECT * FROM STAFF');
  }
}

module.exports = new DB(connection);
