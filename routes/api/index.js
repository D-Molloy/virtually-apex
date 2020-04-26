const router = require('express').Router();
const dataRoutes = require('./data');
const authRoutes = require('./auth');

// Data routes
router.use('/data', dataRoutes);
// Auth Routes
router.use('/auth', authRoutes);

module.exports = router;
