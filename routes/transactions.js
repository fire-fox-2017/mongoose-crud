const router = require('express').Router();
const transactionController = require('../controllers/transactions')

router.get('/', transactionController.getAll)
router.post('/', transactionController.insertOne)
router.put('/:id', transactionController.updateById)
router.delete('/:id', transactionController.deleteById)

module.exports = router;
