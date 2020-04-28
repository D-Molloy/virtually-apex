const router = require('express').Router();
const authController = require('../../controllers/authController');
const { authenticateToken } = require('../../utils/auth');
// Matches with "/api/auth"
router.route('/user').get(authenticateToken, authController.getUser);
router.route('/create').post(authController.create);
router.route('/login').post(authController.login);

module.exports = router;
