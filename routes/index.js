const router = require('express').Router()
const bookController = require('../controllers/book')
const customerController = require('../controllers/customer')
const transactionController = require('../controllers/transaction')

router.get('/', function(req, res) {
  res.send("hai")
})
/////////////////////// BOOKS /////////////////////////////////////
router.get('/books', bookController.getAll)
router.get('/books/:id', bookController.getById)
router.post('/books', bookController.insertOne)
router.put('/books/:id', bookController.updateById)
router.delete('/books/:id', bookController.deleteById)
/////////////////////// CUSTOMERS /////////////////////////////////////
router.get('/customers', customerController.getAll)
router.get('/customers/:id', customerController.getById)
router.post('/customers', customerController.insertOne)
router.put('/customers/:id', customerController.updateById)
router.delete('/customers/:id', customerController.deleteById)
////////////////////////// TRANSACTIONS /////////////////////////////////////

router.get('/transactions', transactionController.getAll)
router.post('/transactions', transactionController.insertOne)
router.put('/transactions/:id', transactionController.updateById)
router.delete('/transactions/:id', transactionController.deleteById)

module.exports = router;
