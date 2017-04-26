var express = require('express');
var router = express.Router();

const collection = require('../controller/book');



/* GET users listing. */
router.get('/', collection.findall);
router.post('/create', collection.create);
router.delete('/:id', collection.delete);
router.get('/:id', collection.findone);
router.put('/:id', collection.update);

module.exports = router;
