const express = require('express');
var router = express.Router();
var controller = require('../controllers/transactionController');

router.get('/',controller.findTransactions);
router.post('/',controller.addTransaction);
router.delete('/',controller.deleteTransaction);
router.put('/',controller.updateTransaction);

module.exports = router;