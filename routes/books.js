const express = require('express');
const router = express.Router();
const book = require('../controllers/books');

router.get('/', book.gets);
router.post('/find/isbn', book.findByIsbn);
router.post('/add', book.add);
router.put('/edit/:isbn', book.edit);
router.delete('/delete/:isbn', book.delete);

module.exports = router;