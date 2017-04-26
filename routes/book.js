var express = require('express');
var router = express.Router();
var book = require('../controllers/bookController')

router.get('/api/book',book.findAll)
router.get('/api/book/:id',book.findById)
router.post('/api/book',book.insert)
router.delete('/api/book/:id',book.remove)
router.patch('/api/book/:id',book.edit)

module.exports = router
