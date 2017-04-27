var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomer);
router.get('/:id',customerController.getCustomer);
router.post('/', customerController.insertCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
