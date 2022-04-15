const express = require('express');
const router = express.Router();
const db = require('../controllers/db');
const userRoter = require('./user');

router.get('/initial-setup-db', db.setupDatabase);
router.use(userRoter);

module.exports = router;