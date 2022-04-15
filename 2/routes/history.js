const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history');

// router.get('/user/:id', userController.GetUserData);
// router.post('/user', userController.CreateUser);
router.get('/history', historyController.GetHistory);

module.exports = router;