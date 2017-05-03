const mongo = require('mongodb');
const Book = require('../models/book');

let methods = {};

methods.insertOne = (req, res) => {
  Book.create(req.body)
  .then(book => {
    res.json(book);
  })
  .catch(err => {
    res.json({message: 'Error insert book'});
  })
}

methods.getAll = (req, res) => {
  Book.find()
  .then(books => {
    res.json(books);
  })
  .catch(err => {
    res.json({message: 'Error find all books'});
  })
}

methods.getById = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    res.json(book);
  })
  .catch(err => {
    res.json({message: 'Error find book by id'});
  })
}

methods.updateById = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    book.isbn = req.body.isbn || book.isbn;
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.category = req.body.category || book.category;
    book.stock = req.body.stock || book.stock;
    book.save()
    .then(book_ => {
      res.json(book_);
    })
    .catch(err_ => {
      res.status(500).send(err);
    })
  })
  .catch(err => {
    res.json({message: 'Error update book by id'})
  })
}

methods.deleteById = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    book.remove()
    .then(book_ => {
      res.json({message: `Book with id ${book_.id} has been deleted`});
    })
    .catch(err_ => {
      res.status(500).send(err);
    })
  })
  .catch(err => {
    res.json({message: 'Error delete book by id'})
  })
}

module.exports = methods;
