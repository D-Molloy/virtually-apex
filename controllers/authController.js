const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmpty, validateSignup } = require('../utils/validation');

module.exports = {
  create: async function (req, res) {
    // validate req.body
    const { isValid, errors, userData } = validateSignup(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    // check if email exists in db
    const { rows: foundUser } = await db.findUser(userData.email);
    if (foundUser.length) {
      return res
        .status(400)
        .json({ email: 'Email already associated with an account.' });
    }

    // create a new user
    try {
      // hash the password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = hashedPassword;

      // create user
      await db.createUser(userData);

      res.send('User created!');
    } catch (e) {
      res.status(500).send({
        message: 'Server error.  Please try again.',
        data: e.message,
      });
    }
  },
  login: function (req, res) {
    console.log('AUTH - LOGIN - ', req.body);
    res.json(req.body);
  },
};

// TODO:
// get all users
// const { rows: users } = await db.getAllUsers();
// res.json(users);
// --------
// find one user
// const { rows: foundUser } = await db.findUser('den@test.com');
// res.json({ foundUser });
