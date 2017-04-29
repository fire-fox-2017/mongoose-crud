var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBook);
router.get('/:id',bookController.getBook);
router.post('/', bookController.insertBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
