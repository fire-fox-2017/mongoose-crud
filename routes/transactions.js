const express = require('express');
const router = express.Router();
const transaction = require('../controllers/transactions');

router.post('/add', transaction.add);
router.get('/', transaction.gets);

module.exports = router;