const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const usersRoutes = require('./users');

// Define all routes
router.use('/user', authController.validateToken, usersRoutes);

module.exports = router;
