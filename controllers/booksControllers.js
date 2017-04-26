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
    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // delete documents
      collection.deleteOne({
        _id: new mongodb.ObjectID(id)
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR Delete :\n ${err}`);
        }
        db.close();
      });
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;

    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;

    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // update documents
      collection.updateOne({
        _id: new mongodb.ObjectID(id)
      }, {
        $set: {
          isbn: isbn,
          title: title,
          author: author,
          category: category,
          stock: stock
        }
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR Update :\n ${err}`);
        }
        db.close();
      });
    });
  }
}
