const express = require('express');
var router = express.Router();
var controller = require('../controllers/customerController');

router.get('/',controller.findCustomers);
router.post('/',controller.addCustomer);
router.delete('/',controller.deleteCustomer);
router.put('/',controller.updateCustomer);

module.exports = router;