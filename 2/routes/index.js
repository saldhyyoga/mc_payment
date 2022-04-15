const express = require('express');
const router = express.Router();
const db = require('../controllers/db');
const userRouter = require('./user');
const historRouter = require('./history');

router.get('/initial-setup-db', db.setupDatabase);
router.use(userRouter);
router.use(historRouter);

module.exports = router;