var ObjectId = require('mongodb').ObjectId
var Book = require('../models/book')
const methods = {}

// SHOW ALL BOOKS
methods.getAllBooks = function(req,res){
  Book.find(function(err,Book){
    if(err){
      console.log(err);
    }
    else{
      res.send(Book)
    }
  })
}// SHOW ALL BOOKS

//INSERT BOOK
methods.insertBook = function(req,res){
  var bookInput = new Book({
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  })
  bookInput.save(function(err, bookInput){
    if(err){
      return console.log(err);
    }
    else{
      res.send(bookInput)
    }
  })
}//INSERT BOOK

//UPDATE BOOK
methods.updateBook = function(req,res){
  let updateBook = {
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  }

  Book.findByIdAndUpdate(req.params.id, updateBook, {new:true}, function(err, result){
    if(!err){
      res.send('berhasil update data')
    }else{
      res.send(err)
    }
  })
}//UPDATE BOOK

//DELETE BOOK
methods.deleteBook = function(req,res){
  Book.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}//DELETE BOOK

module.exports = methods