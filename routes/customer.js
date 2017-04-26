var express = require('express');
var router = express.Router();
var customer = require('../controllers/customerController')

router.get('/api/customer',customer.findAll)
router.get('/api/customer/:id',customer.findById)
router.post('/api/customer',customer.insert)
router.delete('/api/customer/:id',customer.remove)
router.patch('/api/customer/:id',customer.edit)


module.exports = router