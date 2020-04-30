const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

router.use((req, res) => res.status(404).send('Invalid route'));

module.exports = router;
