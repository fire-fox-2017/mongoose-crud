var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.getAllTransaction);
router.get('/:id',transactionController.getTransaction);
router.post('/', transactionController.insertTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
