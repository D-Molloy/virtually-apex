const db = require('../db');
const bcrypt = require('bcrypt');
const { validateSignup, validateLogin } = require('../utils/validation');
const { generateAccessToken } = require('../utils/auth');

module.exports = {
  // create a new account
  create: async (req, res) => {
    // validate signup creds
    console.log('req.body', req.body);
    const { errors, userData } = validateSignup(req.body);
    if (!userData) {
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
  // log a user in
  login: async (req, res) => {
    // validate login creds
    const { errors, userData } = validateLogin(req.body);
    if (!userData) {
      return res.status(400).json(errors);
    }
    // check to see if the user exsists
    const {
      rows: [foundUser],
    } = await db.findUser(userData.email);
    if (!foundUser) {
      return res
        .status(404)
        .json({ message: 'Email not registered. Please create an account.' });
    }
    // validate password
    // compare submitted password and hashed password of found user
    if (await bcrypt.compare(userData.password, foundUser.password)) {
      // user logged in
      // Create JWT
      delete foundUser.password;
      const token = generateAccessToken(foundUser);
      // send the JWT to the user
      return res.send({ token });
    } else {
      // bad password
      return res.status(403).json({
        message: 'Please check credentials and try again',
      });
    }
  },
  // send private user data
  getUser: (req, res) => {
    res.json(req.user);
  },
};
