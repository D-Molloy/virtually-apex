const router = require('express').Router();
const authController = require('../../controllers/authController');

// Matches with "/api/auth/create"
router.route('/create').post(authController.create);
router.route('/login').post(authController.login);

module.exports = router;
