const connection = require('./connection');

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
  createUser({ name, email, password }) {
    return this.connection.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );
  }
}

module.exports = new DB(connection);
