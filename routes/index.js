var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

/* GET home page. */
router.post('/api/books', bookController.insertOne)
router.put('/api/book/:id', bookController.updateById)
router.get('/api/book/:id', bookController.getById)
router.get('/api/books', bookController.getAll)
router.delete('/api/book/:id', bookController.deleteById)

module.exports = router;