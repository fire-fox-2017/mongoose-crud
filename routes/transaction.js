var express = require('express');
var router = express.Router();
var transaction = require('../controllers/transactionController')

router.get('/api/transaction',transaction.findAll)
router.get('/api/transaction/:id',transaction.findById)
router.post('/api/transaction',transaction.insert)
router.delete('/api/transaction/:id',transaction.remove)
router.patch('/api/transaction/:id',transaction.edit)


module.exports = router