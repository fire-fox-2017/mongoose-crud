const express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.get('/',controller.findBooks);
router.post('/',controller.addBook);
router.delete('/',controller.deleteBook);
router.put('/',controller.updateBook);

module.exports = router;