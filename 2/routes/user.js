const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/user/:id', userController.GetUserData);

module.exports = router;