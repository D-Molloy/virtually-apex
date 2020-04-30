const router = require('express').Router();
const dataController = require('../../controllers/dataController');
const { authenticateToken } = require('../../utils/auth');
// Matches with "/api/data/"
router.route('/').get(authenticateToken, dataController.getAllStaff);

module.exports = router;
