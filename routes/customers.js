const router = require('express').Router();
const customerController = require('../controllers/customers')

router.get('/', customerController.getAll)
router.post('/', customerController.insertOne)
router.put('/:id', customerController.updateById)
router.delete('/:id', customerController.deleteById)

module.exports = router;
