const router = require('express').Router();
const bookController = require('../controllers/books')

router.get('/', bookController.getAll)
router.post('/', bookController.insertOne)
router.put('/:id', bookController.updateById)
router.delete('/:id', bookController.deleteById)
//router.get('/seed/:count', bookController.generateBooks)

module.exports = router;
