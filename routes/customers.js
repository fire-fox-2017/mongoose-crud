var express = require('express');
var router = express.Router();
var customer_controller = require('../controllers/customerController');

// Create
router.post('/', customer_controller.create);

// Get all customers
router.get('/', customer_controller.get_customers);

// Get one customer by id
router.get('/:id', customer_controller.get_customer);

// Delete one customer by id
router.delete('/:id', customer_controller.delete);

// Update one customer by id
router.put('/:id', customer_controller.update);

module.exports = router;
