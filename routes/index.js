var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')
const customerController = require('../controllers/customerController')
const transactionController = require('../controllers/transactionController')

/* GET home page. */

// NOTE: bookController
router.post('/api/books', bookController.insertOne)
router.put('/api/book/:id', bookController.updateById)
router.get('/api/book/:id', bookController.getById)
router.get('/api/books', bookController.getAll)
router.delete('/api/book/:id', bookController.deleteById)

// NOTE: customerController
router.post('/api/customers', customerController.insertOne)
router.put('/api/customer/:id', customerController.updateById)
router.get('/api/customer/:id', customerController.getById)
router.get('/api/customers', customerController.getAll)
router.delete('/api/customer/:id', customerController.deleteById)

// NOTE: transactionController
router.post('/api/transactions', transactionController.insertOne)
router.put('/api/transaction/:id', transactionController.updateById)
router.get('/api/transaction/:id', transactionController.getById)
router.get('/api/transactions', transactionController.getAll)
router.delete('/api/transaction/:id', transactionController.deleteById)

module.exports = router;