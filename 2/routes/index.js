const express = require('express');
const router = express.Router();
const db = require('../controllers/db');

router.get('/initial-setup-db', db.setupDatabase);

module.exports = router;