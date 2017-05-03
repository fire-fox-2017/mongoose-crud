const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');
const transactionController = require('../controllers/transaction');
const customerController = require('../controllers/customer');

router.get('/', (req, res) => {
  res.send('Alive API');
});

// NOTE: Book Controller
router.post('/book', bookController.insertOne);
router.get('/book', bookController.getAll);
router.get('/book/:id', bookController.getById);
router.put('/book/:id', bookController.updateById);
router.delete('/book/:id', bookController.deleteById);

// NOTE: Transaction Controller
router.post('/transaction', transactionController.insertOne);
router.get('/transaction', transactionController.getAll);
router.get('/transaction/:id', transactionController.getById);
router.put('/transaction/:id', transactionController.updateById);
router.delete('/transaction/:id', transactionController.deleteById);

// NOTE: Customer Controller
router.post('/customer', customerController.insertOne);
router.get('/customer', customerController.getAll);
router.get('/customer/:id', customerController.getById);
router.put('/customer/:id', customerController.updateById);
router.delete('/customer/:id', customerController.deleteById);

module.exports = router;
