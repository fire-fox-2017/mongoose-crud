var dbBook = require('../models/book')

class Book{
  static findBooks(req, res){
    dbBook.find({}).then((books)=>{
      res.send(books)
    })
  }
  static addBook(req, res){
    var book = new dbBook({
      isbn: req.body.isbn,
      title:  req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    book.save(function (err, book) {
      if (err) res.send(err)
      res.send(book);
    })
  }
  static deleteBook(req,res){
    dbBook.remove({_id: req.body.id}, function (err, book) {
      if (err) res.send(err)
      else{dbBook.find({}).then((books)=>{
        res.send(books)
      })}
    });
  }
  static updateBook(req, res){
    dbBook.update({_id: req.body.id},{$set:{isbn: req.body.isbn,
    title:  req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock}}, function (err, book) {
  if (err) res.send(err);
  res.send(book);
})
  }
}

module.exports = Book