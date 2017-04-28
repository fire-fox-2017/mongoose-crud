var express = require('express');
var router = express.Router();
var bookController = require('../controllers/books.js');
var transController = require('../controllers/transaction.js');
var custController = require('../controllers/customer.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/books', bookController.showAll);
router.post('/api/books', bookController.add);
router.get('/api/books/:id', bookController.showOne);
router.put('/api/books/:id', bookController.update);
router.delete('/api/books/:id', bookController.delete);

router.get('/api/transactions', transController.showAll);
router.post('/api/transactions', transController.add);
router.get('/api/transactions/:id', transController.showOne);
router.put('/api/transactions/:id', transController.update);
router.delete('/api/transactions/:id', transController.delete);

router.get('/api/customers', custController.showAll);
router.post('/api/customers', custController.add);
router.get('/api/customers/:id', custController.showOne);
router.put('/api/customers/:id', custController.update);
router.delete('/api/customers/:id', custController.delete);

module.exports = router;
