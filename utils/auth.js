// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ensure the jwt is present and valid
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // if the authHeader doesn't exist, token will be undefined
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Not permitted.' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    // valid token, add user info
    req.user = user;
    next();
  });
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 1000 * 60 * 60,
  });
};

module.exports = {
  authenticateToken,
  generateAccessToken,
};
