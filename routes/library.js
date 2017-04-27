var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');
const customerController = require('../controllers/customerController');
const transactionController = require('../controllers/transactionController');


router.get('/books/',bookController.getAllBook)
router.post('/books/',bookController.insertBook)
router.put('/books/:id',bookController.updateBook)
router.delete('/books/:id',bookController.deleteBook)


router.get('/customers/',customerController.getAllCustomer)
router.post('/customers/',customerController.insertCustomer)
router.put('/customers/:id',customerController.updateCustomer)
router.delete('/customers/:id',customerController.deleteCustomer)

router.get('/transactions/',transactionController.getAllTransaction)
router.post('/transactions/',transactionController.insertTransaction)
router.put('/transactions/:id',transactionController.updateTransaction)
router.delete('/transactions/:id',transactionController.deleteTransaction)





module.exports = router;
