// var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongoose').Types.ObjectId;
const book = require('../models/book');

let controller = {}

//findall
controller.findall = (req,res,next)=>{
  book.find({},(err, users)=>{
    if(err) throw err
    res.send(users)
  })
}

//findone
controller.findone = (req,res,next)=>{
  book.find({
    _id : ObjectId(req.params.id)
  }, (err, user)=>{
    if(err) throw err
    res.send(user)
  })
}


//create
controller.create = (req, res, next)=>{
  var data = book ({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })

  data.save((err, result)=>{
    if(err) throw err
    res.send('User saved successfully!');
  })
}

//delete
controller.delete =  (req,res,next)=>{
  book.findOneAndRemove({
    _id : ObjectId(req.params.id)
  }, (err)=>{
    if(err) throw err
    res.send('User Delete!')
  })
}

//update
controller.update = (req,res,next)=>{
  book.findOneAndUpdate({
    _id: ObjectId(req.params.id)
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock,
  },(err, user)=>{
  if (err) throw err;
  res.send('Update Successfully')
});
}

module.exports = controller;