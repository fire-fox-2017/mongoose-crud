const Book = require('../models/book.js');

let bookControl = {
  showAll: (req, res) => {
    Book.find({}, (err, books) => {
      if (err) {
        res.send(err);
      } else {
        res.send(books);
      }
    });
  },
  add: (req, res) => {
    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;
    if (isbn && title && author && category && stock) {
      let book = new Book({
        isbn: isbn,
        title: title,
        author: author,
        category: category,
        stock: stock
      });
      book.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Book is successfully added to database');
        }
      });
    } else {
      res.send('isbn, title, author, category, and stock must not be empty');
    }
  },
  showOne: (req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) {
        res.send(err);
      } else {
        res.send(book);
      }
    });
  },
  update: (req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) {
        res.send(err);
      } else {
        let isbn = req.body.isbn || book.isbn;
        let title = req.body.title || book.title;
        let author = req.body.author || book.author;
        let category = req.body.category || book.category;
        let stock = req.body.stock || book.stock;
        Book.update({_id: req.params.id}, {$set:{
          isbn:isbn,
          title:title,
          author:author,
          category:category,
          stock:stock
        }}, (err, updated) => {
          if (err) {
            res.send(err);
          } else {
            res.send(updated);
          }
        });
      }
    });
  },
  delete: (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err) {
        res.send(err);
      } else {
        res.send(deleted);
      }
    });

  }
};


module.exports = bookControl;
