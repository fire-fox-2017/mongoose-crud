var Book = require('../models/book');
module.exports = {
  getall: (req, res, next) => {
    Book.find().exec(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  },
  create: (req, res, next) => {
    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;
    Book.create({
      isbn: isbn,
      title: title,
      author: author,
      category: category,
      stock: stock
    }, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  delete: (req, res, next) => {
    let id = req.params.id;
    Book.remove({
      _id: id
    }, function(err) {
      if (!err) {
        res.send(`Success remove with id ${id}`);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;
    Book.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Book.update({
          _id: id
        }, {
          $set: {
            isbn: req.body.isbn || result.isbn,
            title: req.body.title || result.title,
            author: req.body.author || result.author,
            category: req.body.category || result.category,
            stock: req.body.stock || result.stock
          }
        }, function(err, result) {
          if (result) {
            res.json(result);
          } else {
            res.send(`ERR Update :\n ${err}`);
          }
        });
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  }
}
