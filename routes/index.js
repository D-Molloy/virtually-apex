const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// TODO:  As not being deployed, don't send the react app
// If no API routes are hit, send the React app
router.use((req, res) =>
  // res.sendFile(path.join(__dirname, '../client/build/index.html'))
  res.status(404).send('Invalid route')
);

module.exports = router;
