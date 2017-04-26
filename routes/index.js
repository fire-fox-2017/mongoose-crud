var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')
const customerController = require('../controllers/customerController')

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

module.exports = router;