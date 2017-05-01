const express = require('express');
const router = express.Router();
const customer = require('../controllers/customers');

router.get('/', customer.gets);
router.post('/find/name', customer.findByName);
router.post('/add', customer.add);
router.put('/edit/:name', customer.edit);
router.delete('/delete/:name', customer.delete);

module.exports = router;